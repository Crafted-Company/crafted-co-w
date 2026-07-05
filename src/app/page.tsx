"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageTransition } from "@/components/animations/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { JournalCard } from "@/components/journal/JournalCard";
import { Timeline } from "@/components/journal/Timeline";
import { buttonVariants } from "@/components/ui/button";
import { ProjectStatus } from "@/components/ui/project-status";
import { cn } from "@/lib/utils";
import {
  getProjects,
  getJournalEntries,
  getTimelineEvents,
} from "@/lib/supabase";
import { Project, JournalEntry, TimelineEvent } from "@/types/database.types";
import { Loader } from "@/components/ui/loader";

export default function HomePage() {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [journalEntries, setJournalEntries] = React.useState<JournalEntry[]>([]);
  const [timelineEvents, setTimelineEvents] = React.useState<TimelineEvent[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadData() {
      try {
        const [projData, journalData, timelineData] = await Promise.all([
          getProjects(),
          getJournalEntries(),
          getTimelineEvents(),
        ]);
        setProjects(projData);
        setJournalEntries(journalData);
        setTimelineEvents(timelineData);
      } catch (e) {
        console.error("Error loading home data:", e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const currentlyBuilding = projects.find((p) => p.status === "in_progress");
  const featuredProjects = projects.filter((p) => p.featured_home);
  const latestJournal = journalEntries[0];
  const recentTimeline = timelineEvents.slice(0, 3);

  // Stable kidney/bean shape path matching the signature design identity exactly from THE SHAPE.svg
  const beanPath = "M12.05 46.6653C20.85 41.0653 20.6 28.1032 21.05 21.6653C22.0499 16.1653 28.0502 6.66529 40.5502 5.66529C50.5502 4.86529 62.1 11.6032 65.5502 15.6653C73.5502 24.9986 85.9502 48.4653 71.5502 67.6653C57.1502 86.8653 36.5502 82.6653 28.0502 78.1653L10.05 64.6653C7.05002 60.9986 3.25002 52.2653 12.05 46.6653Z";

  return (
    <PageTransition>
      <div className="flex-grow pb-16 relative overflow-hidden">
        <Container className="space-y-16 pt-16 md:pt-24">
          {/* 1. Hero Section (Split layout with stable logo shape and flowing gradient) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline and Call to Actions */}
            <div className="lg:col-span-7 space-y-6 relative">
              {/* Sparkle Twinkle */}
              <motion.div
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-start/20 bg-brand-start/5 text-xs text-brand-start font-mono tracking-wider uppercase mb-2 select-none"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Workspace Active</span>
              </motion.div>

              <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] max-w-2xl relative">
                I build software, document the journey, and study the details.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Welcome to <strong>Crafted Co.</strong>, my personal creative vault and dev journal.
                Here, ideas evolve from initial commits to finished products.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/projects"
                  className="relative group overflow-hidden bg-gradient-to-r from-brand-start via-brand-mid to-brand-end text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center bg-[length:200%_auto] hover:bg-right transition-all duration-500 active:scale-[0.98] outline-none w-[176px] h-10"
                >
                  <span className="relative flex items-center justify-center w-full h-5 overflow-hidden">
                    {/* View Showcase & Arrow slides out to the right */}
                    <span className="absolute flex items-center gap-1.5 whitespace-nowrap transition-all duration-300 ease-in-out transform group-hover:translate-x-32 group-hover:opacity-0">
                      <span>View Showcase</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    
                    {/* Projects & Arrow slides in from the left */}
                    <span className="absolute flex items-center gap-1.5 whitespace-nowrap transition-all duration-300 ease-in-out transform -translate-x-32 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                      <span>Projects</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="border border-border bg-card/50 hover:bg-muted/80 text-foreground px-6 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center h-10 w-[176px] transition-all duration-300 active:scale-[0.98] outline-none"
                >
                  About My Practice
                </Link>
              </div>
            </div>

            {/* Right Column: Stable organic logo shape with flowing gradient (no outer glows) */}
            <div className="lg:col-span-5 hidden lg:flex justify-center items-center h-full relative select-none">
              <motion.svg
                viewBox="0 0 91 96"
                className="w-[320px] h-[320px] overflow-visible"
                animate={{
                  y: [0, -6, 6, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <defs>
                  {/* Smooth stop-color animated gradient with expanding middle color stop to prevent branding lines */}
                  <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--brand-0)" />
                    <motion.stop
                      offset="50%"
                      animate={{ offset: ["30%", "70%", "30%"] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      stopColor="var(--brand-50)"
                    />
                    <stop offset="100%" stopColor="var(--brand-100)" />
                  </linearGradient>
                </defs>

                <path
                  fill="url(#brandGrad)"
                  d={beanPath}
                />
              </motion.svg>
            </div>
          </div>

          {/* Dynamic Content Loader */}
          {loading ? (
            <Loader />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              {/* 2. Currently Building */}
              {currentlyBuilding && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="space-y-4"
                >
                  <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    // Currently Building
                  </h2>
                  <Card
                    className="overflow-hidden border-border/80 dark:border-border/40 hover:border-brand-start/40 bg-card/30"
                    hoverable
                  >
                    <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      <div className="space-y-2 max-w-xl">
                        <div className="flex items-center gap-3">
                          <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                            {currentlyBuilding.name}
                          </h3>
                          <ProjectStatus status="in_progress" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {currentlyBuilding.short_description}
                        </p>
                      </div>

                      <div className="w-full md:w-72 space-y-2 font-mono text-xs shrink-0 pt-2 md:pt-0">
                        <div className="flex justify-between text-muted-foreground">
                          <span>Status Progress</span>
                          <span>{currentlyBuilding.progress}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-secondary/80 dark:bg-secondary/20 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${currentlyBuilding.progress}%` }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                            className="h-full bg-gradient-to-r from-brand-start via-brand-mid to-brand-end rounded-full"
                          />
                        </div>
                        <div className="pt-2 text-right">
                          <Link
                            href={`/projects/${currentlyBuilding.slug}`}
                            className="inline-flex items-center gap-1 text-xs text-brand-start hover:text-brand-mid hover:underline font-semibold transition-colors duration-200"
                          >
                            Open Progress Logs
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* 3. Split: Recent Activity (Timeline) & Latest Journal */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
                {/* Timeline Column */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="lg:col-span-7 space-y-6"
                >
                  <div className="flex justify-between items-baseline border-b border-border/40 pb-3 mb-6">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      // Recent Workspace Activity
                    </h2>
                    <Link
                      href="/journal"
                      className="text-xs text-brand-start hover:text-brand-mid hover:underline font-semibold font-mono transition-colors duration-200"
                    >
                      View All Log History
                    </Link>
                  </div>
                  <Timeline events={recentTimeline} />
                </motion.div>

                {/* Latest Journal Column */}
                {latestJournal && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="lg:col-span-5 space-y-6 flex flex-col"
                  >
                    <div className="flex justify-between items-baseline border-b border-border/40 pb-3 mb-6">
                      <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        // Latest Journal Log
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <JournalCard entry={latestJournal} />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* 4. Featured Projects */}
              {featuredProjects.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="space-y-6 pt-4"
                >
                  <div className="flex justify-between items-baseline border-b border-border/40 pb-3 mb-6">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      // Featured Project Showcase
                    </h2>
                    <Link
                      href="/projects"
                      className="text-xs text-brand-start hover:text-brand-mid hover:underline font-semibold font-mono transition-colors duration-200"
                    >
                      View Full Showcase
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredProjects.map((project, idx) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        <ProjectCard project={project} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </Container>
      </div>
    </PageTransition>
  );
}
