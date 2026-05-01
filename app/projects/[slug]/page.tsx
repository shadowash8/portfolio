import { getProjectBySlug } from '@/app/lib/org';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CustomLink from '@/app/components/ui/links';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const post = await getProjectBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="mb-8">
            <header className="mb-8">
                <CustomLink href={post.url} className="text-2xl font-semibold tracking-tighter">
                    {post.title}
                </CustomLink>
                {post.tags && <p className="text-neutral-600 dark:text-neutral-400 text-sm">{post.tags}</p>}
            </header>

            <div
                className="prose prose-neutral prose-base dark:prose-invert prose-h1:text-xl prose-h2:text-lg prose-h3:text-md prose-h4:text-sm"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}
