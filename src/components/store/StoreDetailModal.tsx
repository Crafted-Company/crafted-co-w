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
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border border-white/10 flex items-center justify-center shadow-lg shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${item.accentColor}33 0%, #241E1E 100%)`,
                  color: item.accentColor
                }}
              >
                {getStoreIcon(item.iconName, "w-7 h-7 sm:w-8 sm:h-8")}
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight font-sans text-white">
                    {item.name}
                  </h2>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#A19898]">
                    {item.version}
                  </span>
                  {item.isSuite && (
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-start/20 border border-brand-start/30 text-brand-start">
                      Crafted Suite
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#A19898] leading-relaxed">
                  {item.tagline}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 text-[#A19898] hover:text-white transition-colors"
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
                  className={`rounded-xl border border-[#312929] bg-[#241E1E] p-3 flex flex-col justify-between overflow-hidden relative group ${
                    ss.aspectRatio === "portrait" ? "aspect-[9/16] max-h-56" : "aspect-video"
                  }`}
                  style={{ backgroundColor: ss.placeholderColor || "#241E1E" }}
                >
                  <div className="flex items-center justify-between">
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="text-[10px] font-mono text-[#A19898] uppercase">
                      {ss.aspectRatio || "Capture"}
                    </span>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center my-auto py-2 text-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 mb-2"
                      style={{ background: `${item.accentColor}22`, color: item.accentColor }}
                    >
                      {getStoreIcon(item.iconName, "w-5 h-5")}
                    </div>
                    <span className="text-xs font-medium text-white/90 line-clamp-2 px-1">
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
