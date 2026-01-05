import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { PortfolioCategories } from "@/components/home/PortfolioCategories";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Benefits } from "@/components/home/Benefits";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface selection:bg-accent selection:text-primary">
      <Header />
      <Hero />
      <PortfolioCategories />
      <FeaturedProjects />
      <Benefits />
      <Footer />
    </main>
  );
}
