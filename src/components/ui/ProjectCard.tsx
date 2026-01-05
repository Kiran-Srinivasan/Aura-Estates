import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
    id: string;
    title: string;
    location: string;
    type: string;
    priceStart?: string;
    status: "ongoing" | "upcoming" | "sold";
    image: string;
}

export function ProjectCard({ project }: { project: ProjectCardProps }) {
    return (
        <Link href={`/projects/${project.id}`} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-4">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <span className={cn(
                        "px-3 py-1 text-xs uppercase tracking-wider font-medium text-surface",
                        project.status === "ongoing" ? "bg-accent" :
                            project.status === "upcoming" ? "bg-primary" : "bg-red-900"
                    )}>
                        {project.status}
                    </span>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
            </div>

            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs text-accent uppercase tracking-wider font-medium mb-1">{project.type}</p>
                    <h3 className="font-serif text-xl md:text-2xl text-primary mb-1 group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex items-center text-primary/60 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                    </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                    <ArrowUpRight className="w-6 h-6 text-accent" />
                </div>
            </div>
        </Link>
    );
}
