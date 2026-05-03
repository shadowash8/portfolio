import PostsList from "@/app/components/posts";
import ProjectsList from "@/app/components/projects";
import Heading from "@/app/components/ui/heading";

export default function HomePage() {
    return (
        <section>
            <header className="mb-12">
                <Heading>
                    A S H
                </Heading>
                <p>
                    hey, just a random teenager who likes to code and tinker with linux. i just build software i need and for others
                </p>
            </header>

            <div className="mb-12">
                <Heading level={2}>
                    Posts
                </Heading>
                <PostsList />
            </div>

            <div className="mb-12">
                <Heading level={2}>
                    Projects
                </Heading>
                <ProjectsList />
            </div>
        </section>
    );
}
