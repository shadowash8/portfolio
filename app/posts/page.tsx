import PostsList from "@/app/components/posts";

export default async function PostsPage() {
    return (
        <section>
            <header className="mb-4">
                <p>
                    things that interest me that i want to write about.
                </p>
            </header>
            <PostsList />
        </section>
    );
}
