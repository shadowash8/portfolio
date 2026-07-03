import { getLogBySlug } from '@/app/lib/org';
import { notFound } from 'next/navigation';

export default async function LogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const log = await getLogBySlug(slug);

    if (!log) {
        notFound();
    }

    return (
        <article className="mb-8">
            <header className="mb-8">
                <h1 className="text-2xl font-semibold tracking-tighter">
                    {log.title}
                </h1>
                {log.date && <p className="text-neutral-600 dark:text-neutral-400">{log.date}</p>}
            </header>

            <div
                className="prose prose-neutral prose-base dark:prose-invert prose-h1:text-xl prose-h2:text-lg prose-h3:text-md prose-h4:text-sm"
                dangerouslySetInnerHTML={{ __html: log.content }}
            />
        </article>
    );
}
