"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { PageTransition } from "@/components/animations/PageTransition";
import { SectionHeader } from "@/components/ui/section-header";
import { SearchBar } from "@/components/ui/search-bar";
import { JournalCard } from "@/components/journal/JournalCard";
import { EmptyState } from "@/components/ui/empty-state";
import { getJournalEntries } from "@/lib/supabase";
import { JournalEntry } from "@/types/database.types";

export default function JournalPage() {
  const [journalEntries, setJournalEntries] = React.useState<JournalEntry[]>([]);
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadData() {
      try {
        const data = await getJournalEntries();
        setJournalEntries(data);
      } catch (e) {
        console.error("Error loading journal entries:", e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Sort entries: pinned entries first, then newest published entries
  const sortedEntries = React.useMemo(() => {
    return [...journalEntries].sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
    });
  }, [journalEntries]);

  const filteredEntries = React.useMemo(() => {
    return sortedEntries.filter((entry) => {
      const searchLower = search.toLowerCase();
      return (
        entry.title.toLowerCase().includes(searchLower) ||
        (entry.excerpt && entry.excerpt.toLowerCase().includes(searchLower)) ||
        entry.content_mdx.toLowerCase().includes(searchLower) ||
        (entry.project && entry.project.name.toLowerCase().includes(searchLower))
      );
    });
  }, [search, sortedEntries]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-xs text-muted-foreground bg-background">
        Loading journal...
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="py-12 flex-grow">
        <Container className="space-y-8">
          <SectionHeader
            title="Development Journal"
            subtitle="Chronological notes, design iterations, engineering hurdles, and lessons learned."
          />

          {/* Controls Row */}
          <div className="pt-2 flex justify-start">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search journal entries..."
            />
          </div>

          {/* Grid Display */}
          {filteredEntries.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 pt-6">
              {filteredEntries.map((entry) => (
                <JournalCard key={entry.id} entry={entry} />
              ))}
            </div>
          ) : (
            <div className="pt-12">
              <EmptyState
                title="No log entries found"
                description={`We couldn't find any journal entries matching "${search}". Try adjusting your keywords.`}
                action={
                  <button
                    onClick={() => setSearch("")}
                    className="text-xs font-mono font-semibold uppercase tracking-wider px-4 py-2 border border-border hover:border-brand-start rounded-lg transition-colors"
                  >
                    Clear Search
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
