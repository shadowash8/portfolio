import PostsList from "@/app/components/posts";
import Heading from "@/app/components/ui/heading";

export default async function PostsPage() {
    return (
        <section>
            <Heading>Posts</Heading>
            <PostsList />
        </section >
    );
}
