"use client";

import * as React from "react";
import { ArrowUpRight, Download, Smartphone, Monitor, Globe, ExternalLink, Code2 } from "lucide-react";
import { StoreItem } from "@/types/store.types";
import { getStoreIcon } from "./StoreIcons";

interface StoreCardProps {
  item: StoreItem;
  onSelect: (item: StoreItem) => void;
}

export function StoreCard({ item, onSelect }: StoreCardProps) {
  const hasLiveDownloads = item.platforms.some((p) => p.isAvailable && p.downloadUrl);
  const isWebCategory = item.category === "web";
  const primaryPlatform = item.platforms[0];

  return (
    <div
      onClick={() => onSelect(item)}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#241E1E]/80 hover:bg-[#2C2525] border border-[#312929] hover:border-brand-start/40 p-5 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl overflow-hidden text-[#F3EFEF]"
    >
      {/* Subtle Top Glow Accent (constrained to 10-15% opacity as per guidelines) */}
      <div
        className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
        style={{ backgroundColor: item.accentColor }}
      />

      <div className="space-y-4">
        {/* Header Row: Icon & Status */}
        <div className="flex items-start justify-between gap-3">
          <div
            className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center shadow-md transition-transform group-hover:scale-105 duration-300"
            style={{
              background: `linear-gradient(135deg, ${item.accentColor}25 0%, #1B1515 100%)`,
              color: item.accentColor
            }}
          >
            {getStoreIcon(item.iconName, "w-6 h-6")}
          </div>

          <div className="flex flex-col items-end gap-1">
            {item.isSuite ? (
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-start/20 border border-brand-start/30 text-brand-start font-medium">
                Suite
              </span>
            ) : item.status === "available" ? (
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-medium">
                Available
              </span>
            ) : (
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#A19898]">
                In Dev
              </span>
            )}
            <span className="text-[11px] font-mono text-[#6E6666]">
              {item.version}
            </span>
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold font-sans tracking-tight text-white group-hover:text-brand-start transition-colors">
              {item.name}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-[#A19898] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          <p className="text-xs text-[#A19898] line-clamp-2 leading-relaxed">
            {item.tagline}
          </p>
        </div>

        {/* Platform Icons Available */}
        <div className="flex items-center gap-1.5 pt-1">
          {item.platforms.map((p, idx) => (
            <span
              key={idx}
              title={p.label}
              className={`p-1.5 rounded-md text-xs flex items-center gap-1 font-mono ${
                p.isAvailable
                  ? "bg-white/10 text-white border border-white/15"
                  : "bg-white/5 text-[#6E6666] border border-white/5"
              }`}
            >
              {p.platform === "android" && <Smartphone className="w-3 h-3" />}
              {p.platform === "windows" && <Monitor className="w-3 h-3" />}
              {p.platform === "linux" && <Monitor className="w-3 h-3" />}
              {p.platform === "web" && <Globe className="w-3 h-3" />}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Action */}
      <div className="pt-5 mt-4 border-t border-[#312929]/70 flex items-center justify-between text-xs font-mono">
        <span className="text-[#6E6666] truncate max-w-[140px]">
          {item.category.toUpperCase()}
        </span>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(item);
          }}
          className="flex items-center gap-1 text-white group-hover:text-brand-start transition-colors font-sans font-medium"
        >
          {isWebCategory ? (
            <>
              <span>Explore Web App</span>
              <ExternalLink className="w-3 h-3" />
            </>
          ) : hasLiveDownloads ? (
            <>
              <span>Get App</span>
              <Download className="w-3 h-3" />
            </>
          ) : (
            <>
              <span>View Specs</span>
              <ArrowUpRight className="w-3 h-3" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
