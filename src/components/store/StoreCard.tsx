"use client";

import * as React from "react";
import { ArrowUpRight, Download, Smartphone, Monitor, Globe, ExternalLink, Star } from "lucide-react";
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
    <>
      {/* ========================================================================= */}
      {/* MOBILE VIEW: Google Play Store native list item style (visible on < sm) */}
      {/* ========================================================================= */}
      <div
        onClick={() => onSelect(item)}
        className="sm:hidden flex items-center justify-between gap-3.5 p-3 rounded-2xl bg-[#241E1E]/90 hover:bg-[#2A2323] border border-[#312929] active:scale-[0.99] transition-all cursor-pointer shadow-sm"
      >
        {/* App Icon */}
        <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 bg-[#1B1515] shrink-0 shadow-md flex items-center justify-center">
          {item.iconImage ? (
            <img
              src={item.iconImage}
              alt={item.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${item.accentColor}33 0%, #1B1515 100%)`,
                color: item.accentColor
              }}
            >
              {getStoreIcon(item.iconName, "w-6 h-6")}
            </div>
          )}
        </div>

        {/* Info Column */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-bold font-sans tracking-tight text-white truncate">
              {item.name}
            </h3>
            {item.isSuite && (
              <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-brand-start/20 border border-brand-start/30 text-brand-start font-semibold shrink-0">
                Suite
              </span>
            )}
          </div>

          <p className="text-[12px] text-[#A19898] truncate leading-tight mt-0.5">
            {item.tagline}
          </p>

          <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-[#6E6666]">
            {item.rating && (
              <span className="flex items-center gap-0.5 text-amber-400 font-medium">
                <span>{item.rating}</span>
                <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
              </span>
            )}
            <span>•</span>
            <span className="capitalize">{item.category}</span>
            {primaryPlatform?.size && (
              <>
                <span>•</span>
                <span>{primaryPlatform.size}</span>
              </>
            )}
          </div>
        </div>

        {/* Action Button (Play Store pill) */}
        <div className="shrink-0">
          {isWebCategory ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(item);
              }}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 flex items-center gap-1"
            >
              <span>Open</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          ) : hasLiveDownloads ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(item);
              }}
              className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-white/90 shadow-sm flex items-center gap-1"
            >
              <span>Get</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(item);
              }}
              className="px-3 py-1.5 rounded-full text-[11px] font-mono text-[#A19898] bg-white/5 border border-white/10 hover:border-white/20 hover:text-white"
            >
              Details
            </button>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP / TABLET VIEW: High density showcase card (visible on >= sm) */}
      {/* ========================================================================= */}
      <div
        onClick={() => onSelect(item)}
        className="hidden sm:flex group relative flex-col justify-between rounded-2xl bg-[#241E1E]/80 hover:bg-[#2C2525] border border-[#312929] hover:border-brand-start/40 p-5 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl overflow-hidden text-[#F3EFEF]"
      >
        {/* Subtle Top Glow Accent */}
        <div
          className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
          style={{ backgroundColor: item.accentColor }}
        />

        <div className="space-y-4">
          {/* Header Row: Icon & Status */}
          <div className="flex items-start justify-between gap-3">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 bg-[#1B1515] shrink-0 shadow-md transition-transform group-hover:scale-105 duration-300 flex items-center justify-center">
              {item.iconImage ? (
                <img
                  src={item.iconImage}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${item.accentColor}25 0%, #1B1515 100%)`,
                    color: item.accentColor
                  }}
                >
                  {getStoreIcon(item.iconName, "w-6 h-6")}
                </div>
              )}
            </div>

            <div className="flex flex-col items-end gap-1">
              {item.isSuite ? (
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-start/20 border border-brand-start/30 text-brand-start font-medium">
                  Crafted Suite
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

              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#6E6666]">
                {item.rating && (
                  <span className="flex items-center gap-0.5 text-amber-400/90 font-medium">
                    <span>{item.rating}</span>
                    <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  </span>
                )}
                <span>{item.version}</span>
              </div>
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
          <span className="text-[#6E6666] truncate max-w-[140px] uppercase">
            {item.category}
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
    </>
  );
}
