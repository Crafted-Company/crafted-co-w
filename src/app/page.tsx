"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, Play } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageTransition } from "@/components/animations/PageTransition";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { JournalCard } from "@/components/journal/JournalCard";
import { Timeline } from "@/components/journal/Timeline";
import { Button, buttonVariants } from "@/components/ui/button";
import { ProjectStatus } from "@/components/ui/project-status";
import { cn } from "@/lib/utils";
import {
  mockProjects,
  mockJournalEntries,
  mockTimelineEvents,
} from "@/lib/mock-data";

export default function HomePage() {
  // Filter active, featured, and latest structures
  const currentlyBuilding = mockProjects.find((p) => p.status === "in_progress");
  const featuredProjects = mockProjects.filter((p) => p.featured_home);
  const latestJournal = mockJournalEntries[0]; // Newest post
  const recentTimeline = mockTimelineEvents.slice(0, 3); // Get latest 3 events

  // Morphing paths for the organic logo-inspired shape
  const morphPaths = [
    "M50,15 C70,15 90,30 85,55 C80,80 60,85 45,80 C30,75 15,60 20,40 C25,20 30,15 50,15 Z",
    "M50,15 C60,20 85,15 90,45 C95,75 70,80 50,85 C30,90 10,70 15,45 C20,20 40,10 50,15 Z",
    "M50,15 C70,10 80,30 80,50 C80,70 65,90 45,85 C25,80 20,65 20,50 C20,35 30,20 50,15 Z"
  ];

  return (
    <PageTransition>
      <div className="flex-grow pb-16 relative overflow-hidden">
        {/* Organic Background Glow (inspired by Figma logo gradient) */}
        <motion.div
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -30, 10, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 md:top-12 md:-right-20 w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-tr from-brand-start via-brand-mid to-brand-end opacity-[0.12] blur-[100px] pointer-events-none -z-10"
        />

        <Container className="space-y-16 pt-16 md:pt-24">
          {/* 1. Hero Section (Split layout with morphing organic blob) */}
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

              <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] max-w-2xl">
                I build software, document the journey, and study the details.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Welcome to <strong>Crafted Co.</strong>, my personal creative vault and dev journal.
                Here, ideas evolve from initial commits to finished products.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/projects"
                  className={cn(buttonVariants({ variant: "gradient", size: "lg" }), "flex items-center gap-1.5")}
                >
                  View Showcase
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                >
                  About My Practice
                </Link>
              </div>
            </div>

            {/* Right Column: Morphing, Floating Organic Shape */}
            <div className="lg:col-span-5 hidden lg:flex justify-center items-center h-full relative select-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-start/20 to-brand-end/10 blur-3xl rounded-full scale-75 opacity-70 pointer-events-none" />
              <motion.svg
                viewBox="0 0 100 100"
                className="w-72 h-72 drop-shadow-[0_15px_30px_rgba(104,100,246,0.3)] dark:drop-shadow-[0_15px_30px_rgba(104,100,246,0.15)]"
                animate={{
                  y: [0, -12, 12, 0],
                  rotate: [0, 4, -4, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <defs>
                  <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--brand-0)" />
                    <stop offset="50%" stopColor="var(--brand-50)" />
                    <stop offset="100%" stopColor="var(--brand-100)" />
                  </linearGradient>
                </defs>
                <motion.path
                  fill="url(#brandGrad)"
                  animate={{
                    d: morphPaths,
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "mirror",
                  }}
                />
              </motion.svg>
            </div>
          </div>

          {/* 2. Currently Building */}
          {currentlyBuilding && (
            <div className="space-y-4">
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
            </div>
          )}

          {/* 3. Split: Recent Activity (Timeline) & Latest Journal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            {/* Timeline Column */}
            <div className="lg:col-span-7 space-y-6">
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
            </div>

            {/* Latest Journal Column */}
            {latestJournal && (
              <div className="lg:col-span-5 space-y-6 flex flex-col">
                <div className="flex justify-between items-baseline border-b border-border/40 pb-3 mb-6">
                  <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    // Latest Journal Log
                  </h2>
                </div>
                <div className="flex-grow">
                  <JournalCard entry={latestJournal} />
                </div>
              </div>
            )}
          </div>

          {/* 4. Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="space-y-6 pt-4">
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
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </div>
    </PageTransition>
  );
}
