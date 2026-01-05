import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/projects";

export function FeaturedProjects() {
    // Show only first 3 projects
    const featuredProjects = PROJECTS.slice(0, 3);

    return (
        <section className="py-20 md:py-32 bg-surface-dim/30">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="font-serif text-3xl md:text-5xl font-medium mb-4">Featured Projects</h2>
                        <p className="text-primary/70">
                            Discover our latest developments, each chosen for its unique location, future growth potential, and natural beauty.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:flex">View All Projects</Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="mt-12 md:hidden">
                    <Button variant="outline" className="w-full">View All Projects</Button>
                </div>
            </Container>
        </section>
    );
}
