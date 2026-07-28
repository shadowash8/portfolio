"use client";

import { useEffect, useRef } from "react";

type GrainProps = {
  /** 0 to 1 visibility. Increase this (e.g. 0.12 - 0.20) for stronger grain. */
  opacity?: number;
  /** Frames per second for animation. Default 10 */
  fps?: number;
  /** Size of each grain pixel cell. Default 2 */
  grainSize?: number;
};

export default function Grain({
  opacity = 0.12, // Bumped default opacity slightly so it pops
  fps = 10,
  grainSize = 2,
}: GrainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let lastFrameTime = 0;
    const frameInterval = 1000 / fps;

    // Small fixed tile size keeps performance fast
    const tileSize = 256;
    const grainWidth = Math.ceil(tileSize / grainSize);
    const grainHeight = Math.ceil(tileSize / grainSize);

    // Reuse a single offscreen canvas
    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = grainWidth;
    patternCanvas.height = grainHeight;
    const patternCtx = patternCanvas.getContext("2d");
    if (!patternCtx) return;

    const imageData = patternCtx.createImageData(grainWidth, grainHeight);
    const data = imageData.data;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function draw(time: number) {
      animationFrameId = requestAnimationFrame(draw);

      if (time - lastFrameTime < frameInterval) return;
      lastFrameTime = time;

      if (!ctx || !canvas || !patternCtx) return;

      // Randomize noise pixels inside the pre-allocated array (no garbage collection)
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value; // R
        data[i + 1] = value; // G
        data[i + 2] = value; // B
        data[i + 3] = 255; // A
      }
      patternCtx.putImageData(imageData, 0, 0);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = opacity;
      ctx.imageSmoothingEnabled = false;

      // Tile the pattern onto main canvas
      for (let x = 0; x < canvas.width; x += tileSize) {
        for (let y = 0; y < canvas.height; y += tileSize) {
          ctx.drawImage(patternCanvas, x, y, tileSize, tileSize);
        }
      }
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
