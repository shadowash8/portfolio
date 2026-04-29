import { getProjectBySlug } from '@/app/lib/org';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const post = await getProjectBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article>
            <header className="mb-8">
                <Link href={post.url} className="text-2xl font-semibold tracking-tighter">
                    {post.title}
                </Link>
                {post.tags && <p className="text-neutral-400 text-sm">{post.tags}</p>}
            </header>

            <div
                className="prose prose-neutral prose-base prose-invert prose-h1:text-xl prose-h2:text-lg prose-h3:text-md prose-h4:text-sm"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}
