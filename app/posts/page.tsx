import PostsList from "@/app/components/posts";

export default async function Posts() {
    return (
        <section>
            <h1 className="mb-4 text-2xl font-semibold tracking-tighter">Posts</h1>
            <PostsList />
        </section >
    );
}
