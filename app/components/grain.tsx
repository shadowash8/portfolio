"use client";

import { useEffect, useRef } from "react";

type GrainProps = {
    /** 0 to 1, how visible the grain is. Default 0.05 (subtle) */
    opacity?: number;
    /** Frames per second for the grain animation. Default 10 */
    fps?: number;
    /** Size of each grain "cell" in pixels. Bigger = chunkier film-like grain. Default 2 */
    grainSize?: number;
};

export default function Grain({
    opacity = 0.05,
    fps = 10,
    grainSize = 2,
}: GrainProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let patternCanvas: HTMLCanvasElement;
        let patternCtx: CanvasRenderingContext2D | null;
        let animationFrameId: number;
        let lastFrameTime = 0;
        const frameInterval = 1000 / fps;

        function resize() {
            if (!canvas) return;
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }

        function makeGrain() {
            // Draw grain at a lower resolution, then scale up — this is what
            // gives it that chunky "film" look instead of fine digital noise.
            const grainWidth = Math.ceil(width / grainSize);
            const grainHeight = Math.ceil(height / grainSize);

            patternCanvas = document.createElement("canvas");
            patternCanvas.width = grainWidth;
            patternCanvas.height = grainHeight;
            patternCtx = patternCanvas.getContext("2d");
            if (!patternCtx) return;

            const imageData = patternCtx.createImageData(
                grainWidth,
                grainHeight,
            );
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const value = Math.random() * 255;
                data[i] = value; // R
                data[i + 1] = value; // G
                data[i + 2] = value; // B
                data[i + 3] = 255; // A (we control overall opacity via ctx.globalAlpha instead)
            }

            patternCtx.putImageData(imageData, 0, 0);
        }

        function draw(time: number) {
            animationFrameId = requestAnimationFrame(draw);

            if (time - lastFrameTime < frameInterval) return;
            lastFrameTime = time;

            if (!ctx || !canvas) return;

            makeGrain();

            ctx.clearRect(0, 0, width, height);
            ctx.globalAlpha = opacity;
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(patternCanvas, 0, 0, width, height);
        }

        resize();
        window.addEventListener("resize", resize);
        animationFrameId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [opacity, fps, grainSize]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-50 mix-blend-screen"
        />
    );
}
