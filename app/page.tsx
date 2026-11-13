import PostsList from "@/app/components/posts";
import ProjectsList from "@/app/components/projects";
import Stats from "@/app/components/stats";
import Heading from "@/app/components/ui/heading";
import LogsList from "./components/logs";
import Image from "next/image";

export default function HomePage() {
  return (
    <section>
      <header className="mb-6">
        <p>
          hey, i'm ashwin, a first-year <b>cs</b> student and linux tinkerer. i
          build the tools i need, share them with others, and run 100% on free
          software.
        </p>
        <Image
          src="/art.jpg"
          width={644}
          height={320}
          preload
          sizes="(max-width: 640px) calc(100vw - 3rem), 576px"
          alt="black-and-white woodblock-style illustration of clouds drifting over waves"
          className="mt-6 h-auto w-full rounded-[4px] invert dark:invert-0"
        />
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
