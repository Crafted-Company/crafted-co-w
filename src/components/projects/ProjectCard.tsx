"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/database.types";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectStatus } from "@/components/ui/project-status";
import { TechBadge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imgSrc, setImgSrc] = React.useState<string>(
    project.cover_image || "/placeholder.jpg"
  );
  const [imgError, setImgError] = React.useState(false);

  // Simple terminal-style block progress builder
  const getProgressBlocks = (progress: number) => {
    const totalBlocks = 10;
    const filledBlocks = Math.round((progress / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;
    return "█".repeat(filledBlocks) + "░".repeat(emptyBlocks);
  };

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card
        className="overflow-hidden h-full flex flex-col border-border/80 dark:border-border/40 group-hover:border-brand-start/40 dark:group-hover:border-brand-start/30 transition-all duration-300 relative"
        hoverable
      >
        {/* Cover Image / Icon Showcase */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#1B1515] border-b border-border/30">
          {project.cover_image && !imgError ? (
            <Image
              src={imgSrc}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => {
                setImgError(true);
              }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#241E1E] via-[#1E1818] to-[#141010] flex flex-col items-center justify-center p-4">
              <div
                className="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                style={{
                  background: `linear-gradient(135deg, ${project.color || "#6864F6"}25 0%, #1B1515 100%)`,
                }}
              >
                {project.icon ? (
                  <img
                    src={project.icon}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-serif text-2xl font-bold text-white/80">
                    {project.name.charAt(0)}
                  </span>
                )}
              </div>
              <span className="font-sans text-xs text-[#A19898] tracking-wide mt-2 font-medium">
                {project.category?.name || "Crafted Project"}
              </span>
            </div>
          )}
          
          {/* Status Badge Overlaid */}
          <div className="absolute top-3 left-3 z-10">
            <ProjectStatus status={project.status} className="bg-[#1B1515]/90 border border-white/10 backdrop-blur-sm shadow-md" />
          </div>
        </div>

        {/* Contents */}
        <CardContent className="p-5 flex-grow flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-brand-mid transition-colors duration-300 flex items-center gap-1">
                {project.name}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-brand-mid" />
              </h3>
              
              {/* Category chip if available */}
              {project.category && (
                <span className="text-[10px] tracking-wider uppercase font-semibold text-brand-start">
                  {project.category.name}
                </span>
              )}
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2">
              {project.short_description}
            </p>
          </div>

          <div className="mt-5 space-y-4">
            {/* Tech stack chips */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech_stack.slice(0, 3).map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
              {project.tech_stack.length > 3 && (
                <span className="text-[10px] text-muted-foreground font-mono self-center pl-1">
                  +{project.tech_stack.length - 3}
                </span>
              )}
            </div>

            {/* Progress representation */}
            <div className="pt-2 border-t border-border/40 dark:border-border/10 flex items-center justify-between text-xs font-mono">
              <span className="text-brand-start">Progress: {project.progress}%</span>
              <span className="text-brand-start tracking-tight select-none">
                {getProgressBlocks(project.progress)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
export default ProjectCard;
