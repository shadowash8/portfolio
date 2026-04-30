import { getAllProjects } from "@/app/lib/org";
import CustomLink from '@/app/components/ui/links'

export default async function ProjectsList() {
    const projects = await getAllProjects();
    return (
        <div className="flex flex-col gap-6">
            {projects.map((project) => (
                <CustomLink key={project.slug} href={`/projects/${project.slug}`}>
                    <div className="w-full flex flex-col space-x-0 md:space-x-2">
                        <span>
                            {project.title}
                        </span>
                        <span className="text-neutral-400 tabular-nums text-sm">
                            {project.tags}
                        </span>
                    </div>
                </CustomLink>
            ))}
        </div>
    )
}
