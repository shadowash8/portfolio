import ProjectsList from "@/app/components/projects";
import Heading from "@/app//components/ui/heading";

export default async function ProjectsPage() {
    return (
        <section>
            <Heading>Projects</Heading>
            <ProjectsList />
        </section >
    );
}
