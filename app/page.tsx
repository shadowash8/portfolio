import PostsList from "./components/posts";
import ProjectsList from "./components/projects";

export default function Home() {
    return (
        <section>
            <header className="mb-12">
                <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
                    A S H
                </h1>
                <p>
                    hey, just a random teenager who likes to code and tinker with linux. i just build software i need and for others
                </p>
            </header>

            <div className="mb-12">
                <h2 className="mb-4 text-xl font-semibold tracking-tighter">
                    Posts
                </h2>
                <PostsList />
            </div>

            <div className="mb-12">
                <h2 className="mb-4 text-xl font-semibold tracking-tighter">
                    Projects
                </h2>
                <ProjectsList />
            </div>
        </section>
    );
}
