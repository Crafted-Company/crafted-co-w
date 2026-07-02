"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { PageTransition } from "@/components/animations/PageTransition";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { getNowItems } from "@/lib/supabase";
import { NowItem } from "@/types/database.types";

export default function NowPage() {
  const [nowItems, setNowItems] = React.useState<NowItem[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadData() {
      try {
        const data = await getNowItems();
        setNowItems(data);
      } catch (e) {
        console.error("Error loading now items:", e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Group now items by category
  const groupedItems = React.useMemo(() => {
    const groups: { [key: string]: NowItem[] } = {};
    nowItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [nowItems]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-xs text-muted-foreground bg-background">
        Loading status...
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="py-12 flex-grow">
        <Container className="space-y-8 max-w-4xl">
          <SectionHeader
            title="Now"
            subtitle="A snapshot of what I'm currently focusing on, building, playing, and learning. Updated semi-regularly."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {Object.entries(groupedItems).map(([category, items]) => (
              <Card
                key={category}
                className="overflow-hidden border-border/80 dark:border-border/40 hover:border-brand-start/20 transition-all duration-300 bg-card/30"
                hoverable
              >
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-serif text-lg font-semibold text-brand-start uppercase tracking-wider text-xs border-b border-border/40 pb-2">
                    {category}
                  </h3>
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li key={item.id} className="space-y-1">
                        <h4 className="text-sm font-semibold text-foreground">
                          {item.title}
                        </h4>
                        {item.description && (
                          <p className="text-xs text-muted-foreground leading-relaxed pl-2 border-l border-border/60">
                            {item.description}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="pt-8 text-center text-xs text-muted-foreground font-mono">
            Inspired by Derek Sivers' <a href="https://nownownow.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">/now page movement</a>.
          </div>
        </Container>
      </div>
    </PageTransition>
  );
}
