import ProjectsList from "@/app/components/projects";

export default async function ProjectsPage() {
    return (
        <section>
            <h1 className="mb-4 text-2xl font-semibold tracking-tighter">Projects</h1>
            <ProjectsList />
        </section >
    );
}
