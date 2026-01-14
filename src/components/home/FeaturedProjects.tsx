import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/projects";

export function FeaturedProjects() {
    // Show only first 3 projects
    const featuredProjects = PROJECTS.slice(0, 3);

    return (
        <section className="py-16 md:py-32 bg-surface-dim/30">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="font-serif text-3xl md:text-5xl font-medium mb-6 text-black">Featured Projects</h2>
                        <div className="h-0.5 w-24 bg-[#C5A065] mb-6" />
                        <p className="font-serif text-lg md:text-xl text-stone-600 italic leading-relaxed">
                            Thoughtfully curated estates set amidst forests, backwaters, and open landscapes.
                            <br className="hidden md:block" />
                            Where nature, design, and quiet luxury come together.
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
