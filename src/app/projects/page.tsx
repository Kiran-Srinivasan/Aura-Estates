import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectsList } from "@/components/projects/ProjectsList";
import { PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-surface">
            <Header />

            {/* Page Header */}
            <section className="pt-40 pb-20 bg-primary/5">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">
                        Our Portfolio
                    </h1>
                    <p className="text-primary/60 max-w-2xl mx-auto text-lg font-light">
                        Explore our curated collection of premium land estates, selected for their pristine beauty and exceptional value.
                    </p>
                </div>
            </section>

            <ProjectsList projects={PROJECTS} />

            <Footer />
        </main>
    );
}
