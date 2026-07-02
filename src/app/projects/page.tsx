"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { PageTransition } from "@/components/animations/PageTransition";
import { SectionHeader } from "@/components/ui/section-header";
import { SearchBar } from "@/components/ui/search-bar";
import { FilterBar } from "@/components/ui/filter-bar";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { EmptyState } from "@/components/ui/empty-state";
import { mockProjects } from "@/lib/mock-data";

const categories = [
  { label: "All Projects", value: "all" },
  { label: "Games", value: "games" },
  { label: "Applications", value: "apps" },
  { label: "Websites", value: "websites" },
];

export default function ProjectsPage() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("all");

  const filteredProjects = React.useMemo(() => {
    return mockProjects.filter((project) => {
      // Category Match
      const matchesCategory =
        category === "all" || (project.category && project.category.slug === category);

      // Search Match
      const searchLower = search.toLowerCase();
      const matchesSearch =
        project.name.toLowerCase().includes(searchLower) ||
        project.short_description.toLowerCase().includes(searchLower) ||
        project.tech_stack.some((tech) => tech.toLowerCase().includes(searchLower));

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <PageTransition>
      <div className="py-12 flex-grow">
        <Container className="space-y-8">
          <SectionHeader
            title="Projects"
            subtitle="A compilation of applications, games, and tools documenting my creative and technical journey."
          />

          {/* Search & Filter Controls */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center pt-2">
            <FilterBar
              options={categories}
              selectedValue={category}
              onChange={setCategory}
            />
            <SearchBar value={search} onChange={setSearch} placeholder="Search projects or tech..." />
          </div>

          {/* Grid Display */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="pt-12">
              <EmptyState
                title="No projects found"
                description={`We couldn't find any projects matching "${search}" in the selected category. Try resetting your search filters.`}
                action={
                  <button
                    onClick={() => {
                      setSearch("");
                      setCategory("all");
                    }}
                    className="text-xs font-mono font-semibold uppercase tracking-wider px-4 py-2 border border-border hover:border-brand-start rounded-lg transition-colors"
                  >
                    Clear Filters
                  </button>
                }
              />
            </div>
          )}
        </Container>
      </div>
    </PageTransition>
  );
}
