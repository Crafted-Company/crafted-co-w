import * as React from "react";
import { Code, Globe, ShoppingBag, Gamepad } from "lucide-react";
import { Project } from "@/types/database.types";
import { ProjectStatus } from "@/components/ui/project-status";
import { TechBadge } from "@/components/ui/badge";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="space-y-6 py-8 border-b border-border/40 dark:border-border/10 mb-8">
      {/* Category & Status Row */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {project.category && (
            <span className="text-xs font-mono uppercase tracking-wider text-brand-start font-semibold">
              {project.category.name}
            </span>
          )}
          <span className="text-muted-foreground">•</span>
          <span className="text-xs font-mono text-muted-foreground">
            Progress: {project.progress}%
          </span>
        </div>
        <ProjectStatus status={project.status} />
      </div>

      {/* Title & Short Description */}
      <div className="space-y-4">
        <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          {project.name}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          {project.short_description}
        </p>
      </div>

      {/* Stack & Links Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-border/20">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech_stack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
          {project.repository_url && (
            <a
              href={project.repository_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Code className="w-4 h-4" />
              Source
            </a>
          )}
          {project.website_url && (
            <a
              href={project.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.steam_url && (
            <a
              href={project.steam_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Gamepad className="w-4 h-4" />
              Steam
            </a>
          )}
          {project.playstore_url && (
            <a
              href={project.playstore_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              App Store
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProjectHero;
