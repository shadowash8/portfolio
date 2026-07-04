import ProjectsList from "@/app/components/projects";

export default async function ProjectsPage() {
    return (
        <section>
            <header className="mb-4">
                <p>
                    cool projects ive made and use in my daily lives.
                </p>
            </header>
            <ProjectsList />
        </section >
    );
}
