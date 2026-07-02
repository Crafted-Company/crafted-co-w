"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { PageTransition } from "@/components/animations/PageTransition";
import { SectionHeader } from "@/components/ui/section-header";
import { SearchBar } from "@/components/ui/search-bar";
import { FilterBar } from "@/components/ui/filter-bar";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { EmptyState } from "@/components/ui/empty-state";
import { getProjects, getCategories } from "@/lib/supabase";
import { Project, Category } from "@/types/database.types";
import { Loader } from "@/components/ui/loader";

export default function ProjectsPage() {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [categories, setCategories] = React.useState<{ label: string; value: string }[]>([
    { label: "All Projects", value: "all" },
  ]);
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("all");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadData() {
      try {
        const [projData, catData] = await Promise.all([
          getProjects(),
          getCategories(),
        ]);
        setProjects(projData);
        setCategories([
          { label: "All Projects", value: "all" },
          ...catData.map((c) => ({ label: c.name, value: c.slug })),
        ]);
      } catch (e) {
        console.error("Error loading projects data:", e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredProjects = React.useMemo(() => {
    return projects.filter((project) => {
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
  }, [search, category, projects]);

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

          {/* Dynamic Display Grid with Loader and Scroll-in-view Transitions */}
          {loading ? (
            <Loader />
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="pt-12"
            >
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
            </motion.div>
          )}
        </Container>
      </div>
    </PageTransition>
  );
}
