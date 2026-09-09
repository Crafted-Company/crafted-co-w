"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Smartphone,
  Layers,
  Gamepad2,
  Monitor,
  Globe,
  Download,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  Search,
  PackageCheck,
  ArrowRight
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageTransition } from "@/components/animations/PageTransition";
import { SectionHeader } from "@/components/ui/section-header";
import { STORE_ITEMS } from "@/data/store-items";
import { StoreItem, StoreCategory } from "@/types/store.types";
import { StoreCard } from "@/components/store/StoreCard";
import { StoreDetailModal } from "@/components/store/StoreDetailModal";

const CATEGORY_TABS: { label: string; value: StoreCategory; icon: any }[] = [
  { label: "All Items", value: "all", icon: Layers },
  { label: "Crafted Suite", value: "suite", icon: Sparkles },
  { label: "Mobile Apps", value: "apps", icon: Smartphone },
  { label: "Games", value: "games", icon: Gamepad2 },
  { label: "PC & Tools", value: "tools", icon: Monitor },
  { label: "Web Apps", value: "web", icon: Globe }
];

export default function StorePage() {
  const [activeCategory, setActiveCategory] = React.useState<StoreCategory>("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState<StoreItem | null>(null);

  const filteredItems = React.useMemo(() => {
    return STORE_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "all"
          ? true
          : activeCategory === "suite"
          ? item.isSuite
          : item.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        item.name.toLowerCase().includes(query) ||
        item.tagline.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.techStack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <PageTransition>
      <div className="py-8 sm:py-12 flex-grow min-h-screen">
        <Container className="space-y-10 max-w-6xl">
          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/15 bg-white/5 text-xs font-mono text-[#F3EFEF]">
              <Sparkles className="w-3.5 h-3.5 text-brand-start" />
              <span>CRAFTED STORE REGISTRY</span>
            </div>
            <SectionHeader
              title="Crafted Store"
              subtitle="The official distribution hub for Crafted Co. applications, native desktop tools, indie games, and web portals."
            />
          </div>

          {/* Android Store App Hero Feature Banner */}
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-r from-[#241E1E] via-[#2A1E22] to-[#1B1515] p-6 sm:p-8 shadow-2xl">
            {/* Subtle radial glow */}
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-brand-start/15 blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-brand-mid/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-xl">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-start">
                  <Smartphone className="w-4 h-4" />
                  <span className="uppercase tracking-wider font-semibold">Native Android Client</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-white">
                  Crafted Store App for Android
                </h2>
                <p className="text-sm text-[#A19898] leading-relaxed">
                  Experience frictionless 1-click APK downloads, auto-update background polling, and direct Android Package Installer integration. Zero accounts or tracking required.
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#F3EFEF]/80 pt-1">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Verified Binaries
                  </span>
                  <span className="flex items-center gap-1.5">
                    <RefreshCw className="w-4 h-4 text-brand-start" />
                    GitHub Releases Sync
                  </span>
                  <span className="flex items-center gap-1.5">
                    <PackageCheck className="w-4 h-4 text-amber-400" />
                    Zero Ads / Open Catalog
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    const storeApp = STORE_ITEMS.find((i) => i.id === "craftnime");
                    if (storeApp) setSelectedItem(storeApp);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-start via-brand-mid to-brand-end text-white text-sm font-semibold shadow-lg hover:shadow-brand-start/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Store APK</span>
                </button>
                <span className="text-[11px] font-mono text-[#6E6666] text-center">
                  v1.0.0-preview • Direct GitHub Asset
                </span>
              </div>
            </div>
          </div>

          {/* Controls Bar: Category Pills & Search */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Category Pills (horizontally scrollable on mobile) */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {CATEGORY_TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeCategory === tab.value;
                  return (
                    <button
                      key={tab.value}
                      onClick={() => setActiveCategory(tab.value)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all border ${
                        isActive
                          ? "bg-white/10 text-white border-white/25 shadow-md"
                          : "bg-[#241E1E]/60 text-[#A19898] border-[#312929] hover:text-white hover:bg-[#2C2525]"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Search input */}
              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 text-[#A19898] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search catalog or tech..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#241E1E]/80 border border-[#312929] text-xs font-mono text-white placeholder:text-[#6E6666] focus:outline-none focus:border-brand-start/50 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Catalog Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredItems.map((item) => (
                <StoreCard
                  key={item.id}
                  item={item}
                  onSelect={(selected) => setSelectedItem(selected)}
                />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl border border-dashed border-[#312929] bg-[#241E1E]/30 space-y-3">
              <PackageCheck className="w-8 h-8 text-[#A19898] mx-auto" />
              <div className="text-sm font-semibold text-white">No items found</div>
              <p className="text-xs text-[#A19898] max-w-sm mx-auto">
                No store applications or tools match the current filter and search query.
              </p>
            </div>
          )}

          {/* Modal Inspector */}
          <StoreDetailModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        </Container>
      </div>
    </PageTransition>
  );
}
