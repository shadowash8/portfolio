import PostsList from "@/app/components/posts";
import ProjectsList from "@/app/components/projects";
import Heading from "@/app/components/ui/heading";

export default function HomePage() {
    return (
        <section>
            <header className="mb-4">
                <p>
                    hey, just a random teenager who likes to code and tinker with linux. i just build software i need and for others. i believe in free software.
                </p>
            </header>

            <div className="mb-8">
                <Heading level={2} className="mb-4">
                    posts
                </Heading>
                <PostsList limit={5} />
            </div>

            <div>
                <Heading level={2} className="mb-4">
                    projects
                </Heading>
                <ProjectsList />
            </div>
        </section>
    );
}
