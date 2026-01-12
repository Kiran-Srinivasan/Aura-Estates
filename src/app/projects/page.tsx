
import { PageBanner } from "@/components/layout/PageBanner";
import { ProjectsList } from "@/components/projects/ProjectsList";
import { ConsultationCTA } from "@/components/projects/ConsultationCTA";
import { PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-surface">
            <PageBanner
                title="Our Portfolio"
                subtitle="Explore our curated collection of premium land estates, selected for their pristine beauty and exceptional value."
                image="/images/projects/hero.png"
                enableSmoke={false}
                overlayOpacity={0.3}
            />

            <ProjectsList projects={PROJECTS} />

            <ConsultationCTA />
        </main>
    );
}
