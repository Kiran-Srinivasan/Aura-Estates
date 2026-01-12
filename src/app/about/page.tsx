import { PageBanner } from "@/components/layout/PageBanner";
import { BrandStory } from "@/components/about/BrandStory";
import { Stats } from "@/components/about/Stats";
import { MissionVision } from "@/components/about/MissionVision";

export const metadata = {
    title: "About Us | Aura Estates",
    description: "Learn about Aura Estates, our legacy of luxury, and our commitment to creating landmarks.",
};

export default function AboutPage() {
    return (
        <main>
            <PageBanner
                title="Our Legacy"
                subtitle="Two decades of redefining luxury, crafting landmarks, and building trust."
                image="/images/about/hero.png"
                enableSmoke={false}
                overlayOpacity={0.3}
            />
            <BrandStory />
            <Stats />
            <MissionVision />
        </main>
    );
}
