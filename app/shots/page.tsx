import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Heading from "@/app/components/ui/heading";

export default function ShotsPage() {
    // 1. Resolve the path to the public/shots folder
    const shotsDirectory = path.join(process.cwd(), 'public/shots');

    // 2. Read the filenames, filtering for .jpg files
    const filenames = fs.readdirSync(shotsDirectory);
    const photos = filenames.filter((file) => file.endsWith('.jpg'));

    return (
        <section>
            <Heading>Shots</Heading>

            <div className="grid grid-cols-1 gap-4">
                {photos.map((src) => (
                    <div key={src} className="break-inside-avoid">
                        <Image
                            src={`/shots/${src}`}
                            alt={`Shot: ${src}`}
                            width={1920}
                            height={1080}
                            className="w-full h-auto rounded-lg shadow-md"
                            quality={75}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
