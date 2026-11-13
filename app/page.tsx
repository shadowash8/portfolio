import PostsList from "@/app/components/posts";
import ProjectsList from "@/app/components/projects";
import Stats from "@/app/components/stats";
import Heading from "@/app/components/ui/heading";
import LogsList from "./components/logs";

export default function HomePage() {
  return (
    <section>
      <header className="mb-4">
        <p>
          hey, i'm ashwin, a first-year <b>cs</b> student and linux tinkerer. I
          build the tools I need, share them with others, and run 100% on free
          software.
        </p>
      </header>

      <div className="mb-8">
        <Heading level={2} className="mb-4">
          posts
        </Heading>
        <PostsList limit={5} />
      </div>

      <div className="mb-8">
        <Heading level={2} className="mb-4">
          projects
        </Heading>
        <ProjectsList />
      </div>

      <div className="mb-10">
        <Heading level={2} className="mb-4">
          logs
        </Heading>
        <LogsList />
      </div>

      <div>
        <Stats />
      </div>
    </section>
  );
}
