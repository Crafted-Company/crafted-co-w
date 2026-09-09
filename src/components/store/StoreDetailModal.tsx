"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, Check, Monitor, Smartphone, Globe, Code2, AlertCircle, Sparkles } from "lucide-react";
import { StoreItem, PlatformDownload } from "@/types/store.types";
import { getStoreIcon } from "./StoreIcons";

interface StoreDetailModalProps {
  item: StoreItem | null;
  onClose: () => void;
}

export function StoreDetailModal({ item, onClose }: StoreDetailModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1B1515] border border-[#312929] shadow-2xl p-5 sm:p-8 z-10 space-y-6 text-[#F3EFEF]"
        >
          {/* Header Row */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 min-w-0">
              {/* App Icon */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/10 bg-[#1B1515] shrink-0 shadow-xl flex items-center justify-center">
                {item.iconImage ? (
                  <img
                    src={item.iconImage}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${item.accentColor}33 0%, #241E1E 100%)`,
                      color: item.accentColor
                    }}
                  >
                    {getStoreIcon(item.iconName, "w-8 h-8 sm:w-10 sm:h-10")}
                  </div>
                )}
              </div>

              <div className="space-y-1.5 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight font-sans text-white truncate">
                    {item.name}
                  </h2>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#A19898]">
                    {item.version}
                  </span>
                  {item.isSuite && (
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-start/20 border border-brand-start/30 text-brand-start font-semibold">
                      Crafted Suite
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#A19898] leading-relaxed">
                  {item.tagline}
                </p>

                {/* Metrics bar: Rating, Category, Installs */}
                <div className="flex items-center gap-3 text-xs font-mono text-[#A19898] pt-0.5">
                  {item.rating && (
                    <span className="flex items-center gap-1 text-amber-400 font-semibold">
                      <span>{item.rating}</span>
                      <span className="text-[10px]">★</span>
                    </span>
                  )}
                  <span className="text-[#4D4242]">•</span>
                  <span className="uppercase tracking-wider text-[11px] text-white/80">{item.category}</span>
                  {item.installs && (
                    <>
                      <span className="text-[#4D4242]">•</span>
                      <span className="text-[11px] text-[#A19898]">{item.installs}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 text-[#A19898] hover:text-white transition-colors shrink-0"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Download & Actions Matrix */}
          <div className="p-4 rounded-xl bg-[#241E1E] border border-[#312929] space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#A19898] uppercase tracking-wider">
              <span>Platform Packages & Links</span>
              <span>{item.releaseDate}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {item.platforms.map((platform, idx) => {
                const isWeb = platform.platform === "web";
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-lg bg-[#1B1515] border border-[#312929]/70"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center text-[#A19898]">
                        {platform.platform === "android" && <Smartphone className="w-4 h-4" />}
                        {platform.platform === "windows" && <Monitor className="w-4 h-4" />}
                        {platform.platform === "linux" && <Monitor className="w-4 h-4" />}
                        {platform.platform === "web" && <Globe className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">
                          {platform.label}
                        </div>
                        <div className="text-[11px] font-mono text-[#A19898]">
                          {platform.size ? `${platform.size} • ` : ""}{platform.version || item.version}
                        </div>
                      </div>
                    </div>

                    {platform.isAvailable && platform.downloadUrl ? (
                      <a
                        href={platform.downloadUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-start hover:bg-brand-mid text-white text-xs font-semibold shadow-md transition-colors"
                      >
                        {isWeb ? (
                          <>
                            <span>Launch</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <Download className="w-3.5 h-3.5" />
                            <span>Get</span>
                          </>
                        )}
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-[#A19898] px-2.5 py-1 rounded bg-white/5 border border-white/5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 text-amber-500/80" />
                        In Dev
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {item.githubUrl && (
              <div className="pt-1 flex items-center justify-between text-xs text-[#A19898]">
                <span>Source Repository</span>
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-white hover:text-brand-start underline underline-offset-4 transition-colors font-mono"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#A19898]">
              Overview
            </h3>
            <p className="text-sm text-[#F3EFEF]/90 leading-relaxed font-sans">
              {item.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#A19898]">
              Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {item.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#F3EFEF]/85">
                  <Check className="w-3.5 h-3.5 text-brand-start mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshots Placeholders (Clean Mockup Frames) */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#A19898] flex items-center justify-between">
              <span>Preview Gallery</span>
              <span className="text-[11px] lowercase text-[#6E6666]">Official release captures</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {item.screenshots.map((ss) => (
                <div
                  key={ss.id}
                  className="rounded-2xl border border-[#312929] bg-[#241E1E] p-4 flex flex-col justify-between overflow-hidden relative group aspect-[9/16] max-h-72 shadow-md hover:border-brand-start/30 transition-colors"
                  style={{ backgroundColor: ss.placeholderColor || "#241E1E" }}
                >
                  {/* Phone frame top speaker bar indicator */}
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-1 rounded-full bg-white/20 mx-auto" />
                  </div>
                  
                  <div className="flex flex-col items-center justify-center my-auto py-2 text-center">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 mb-2.5 overflow-hidden shadow"
                      style={{ background: `${item.accentColor}22`, color: item.accentColor }}
                    >
                      {item.iconImage ? (
                        <img
                          src={item.iconImage}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        getStoreIcon(item.iconName, "w-6 h-6")
                      )}
                    </div>
                    <span className="text-xs font-semibold text-white/90 line-clamp-2 px-1 leading-snug">
                      {ss.caption}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono text-center text-[#6E6666] tracking-tight">
                    {item.name} • {item.version}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-2 border-t border-[#312929]/50 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-[#A19898] mr-2">Tech:</span>
            {item.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[#A19898]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
