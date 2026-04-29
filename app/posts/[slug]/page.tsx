import { getPostBySlug } from '@/app/lib/org';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="mb-8">
            <header className="mb-8">
                <h1 className="text-2xl font-semibold tracking-tighter">
                    {post.title}
                </h1>
                {post.date && <p className="text-neutral-400">{post.date}</p>}
            </header>

            <div
                className="prose prose-neutral prose-base prose-invert prose-h1:text-xl prose-h2:text-lg prose-h3:text-md prose-h4:text-sm"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}
