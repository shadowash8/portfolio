import { getAllPosts } from "@/app/lib/org";
import CustomLink from '@/app/components/ui/links'

interface PostsListProps {
    limit?: number
}

export default async function PostsList({ limit }: PostsListProps) {
    const posts = await getAllPosts();
    const displayedPosts = limit ? posts.slice(0, limit) : posts;
    return (
        <div className="flex flex-col gap-6">
            {displayedPosts.map((post) => (
                <CustomLink key={post.slug} href={`/posts/${post.slug}`}>
                    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                        <span className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                            {post.date}
                        </span>
                        <span>
                            {post.title}
                        </span>
                    </div>
                </CustomLink>
            ))}
            {limit && (
                <CustomLink
                    href="/posts"
                    className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
                >
                    read more →
                </CustomLink>
            )}
        </div>
    )
}
