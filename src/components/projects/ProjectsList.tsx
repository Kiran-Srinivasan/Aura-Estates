"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Project } from "@/data/projects";
import { clsx } from "clsx";

interface ProjectsListProps {
    projects: Project[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
    const [filter, setFilter] = useState("all");

    // Extract unique categories for filter tabs
    const categories = useMemo(() => {
        const uniqueTypes = Array.from(new Set(projects.map(p => p.type)));
        return ["all", ...uniqueTypes];
    }, [projects]);

    const filteredProjects = useMemo(() => {
        if (filter === "all") return projects;
        return projects.filter(p => p.type === filter);
    }, [projects, filter]);

    return (
        <section className="py-12 md:py-20">
            <Container>
                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={clsx(
                                "px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 border",
                                filter === category
                                    ? "bg-primary text-white border-primary"
                                    : "bg-transparent text-primary/60 border-primary/10 hover:border-primary/30"
                            )}
                        >
                            {category === "all" ? "All Projects" : category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-primary/40">
                        <p>No projects found matching this category.</p>
                    </div>
                )}
            </Container>
        </section>
    );
}
