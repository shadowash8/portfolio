import Link from "next/link";
import { getAllPosts } from "@/app/lib/org";

export default async function PostsList() {
    const posts = await getAllPosts();
    return (
        <div className="flex flex-col gap-6">
            {posts.map((post) => (
                <Link key={post.slug} href={`/posts/${post.slug}`}>
                    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                        <span className="text-neutral-400 tabular-nums">
                            {post.date}
                        </span>
                        <span>
                            {post.title}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    )
}
