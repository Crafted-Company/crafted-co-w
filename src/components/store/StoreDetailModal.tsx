import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, Check, Monitor, Smartphone, Globe, Code2, AlertCircle, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { StoreItem } from "@/types/store.types";
import { getStoreIcon } from "./StoreIcons";

interface StoreDetailModalProps {
  item: StoreItem | null;
  onClose: () => void;
}

export function StoreDetailModal({ item, onClose }: StoreDetailModalProps) {
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") setLightboxIndex(null);
        if (e.key === "ArrowRight" && item) {
          setLightboxIndex((prev) => (prev !== null && prev < item.screenshots.length - 1 ? prev + 1 : prev));
        }
        if (e.key === "ArrowLeft") {
          setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
        }
        return;
      }
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
  }, [item, onClose, lightboxIndex]);

  if (!item) return null;

  // Separate screenshots by orientation for clean organized rows
  const portraitScreens = item.screenshots.filter((s) => s.aspectRatio === "portrait");
  const landscapeScreens = item.screenshots.filter(
    (s) => s.aspectRatio === "landscape" || (!s.aspectRatio && (item.category === "tools" || item.category === "web"))
  );
  const unclassifiedScreens = item.screenshots.filter(
    (s) => !portraitScreens.includes(s) && !landscapeScreens.includes(s)
  );

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl p-5 sm:p-8 z-10 space-y-6 text-foreground dark:bg-[#1B1515] dark:border-[#312929] dark:text-[#F3EFEF]"
          >
            {/* Header Row */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 min-w-0">
                {/* App Icon */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-border bg-muted/20 shrink-0 shadow-lg flex items-center justify-center dark:border-white/10 dark:bg-[#1B1515]">
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
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight font-sans text-foreground truncate">
                      {item.name}
                    </h2>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground dark:bg-white/5 dark:border-white/10 dark:text-[#A19898]">
                      {item.version}
                    </span>
                    {item.isSuite && (
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-start/15 border border-brand-start/30 text-brand-start font-semibold">
                        Crafted Suite
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.tagline}
                  </p>

                  {/* Metrics bar: Rating, Category, Installs */}
                  <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground pt-0.5">
                    {item.rating && (
                      <span className="flex items-center gap-1 text-amber-500 dark:text-amber-400 font-semibold">
                        <span>{item.rating}</span>
                        <span className="text-[10px]">★</span>
                      </span>
                    )}
                    <span className="text-border dark:text-[#4D4242]">•</span>
                    <span className="uppercase tracking-wider text-[11px] text-foreground/80">{item.category}</span>
                    {item.installs && (
                      <>
                        <span className="text-border dark:text-[#4D4242]">•</span>
                        <span className="text-[11px] text-muted-foreground">{item.installs}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg border border-border bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors shrink-0 dark:border-white/5 dark:bg-white/5 dark:hover:bg-white/10 dark:text-[#A19898] dark:hover:text-white"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Download & Actions Matrix */}
            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-3 dark:bg-[#241E1E] dark:border-[#312929]">
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground uppercase tracking-wider">
                <span>Platform Packages & Links</span>
                <span>{item.releaseDate}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {item.platforms.map((platform, idx) => {
                  const isWeb = platform.platform === "web";
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg bg-card border border-border dark:bg-[#1B1515] dark:border-[#312929]/70 shadow-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-md bg-muted flex items-center justify-center text-muted-foreground dark:bg-white/5 dark:text-[#A19898]">
                          {platform.platform === "android" && <Smartphone className="w-4 h-4" />}
                          {platform.platform === "windows" && <Monitor className="w-4 h-4" />}
                          {platform.platform === "linux" && <Monitor className="w-4 h-4" />}
                          {platform.platform === "web" && <Globe className="w-4 h-4" />}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-foreground">
                            {platform.label}
                          </div>
                          <div className="text-[11px] font-mono text-muted-foreground">
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
                        <span className="text-[11px] font-mono text-muted-foreground px-2.5 py-1 rounded bg-muted/80 border border-border flex items-center gap-1 dark:bg-white/5 dark:border-white/5 dark:text-[#A19898]">
                          <AlertCircle className="w-3 h-3 text-amber-500" />
                          In Dev
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {item.githubUrl && (
                <div className="pt-1 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Source Repository</span>
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-foreground hover:text-brand-start underline underline-offset-4 transition-colors font-mono dark:text-white"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>GitHub Repository</span>
                  </a>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Overview
              </h3>
              <p className="text-sm text-foreground/90 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-foreground/85">
                    <Check className="w-3.5 h-3.5 text-brand-start mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview Gallery Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Preview Gallery
                </h3>
                <span className="text-[11px] font-mono text-muted-foreground/80">
                  Click any screenshot to expand
                </span>
              </div>

              {/* Landscape / Desktop Preview Row */}
              {landscapeScreens.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
                    <Monitor className="w-3.5 h-3.5 text-brand-start" />
                    <span>Desktop & Studio Views</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {landscapeScreens.map((ss) => {
                      const overallIdx = item.screenshots.findIndex((s) => s.id === ss.id);
                      return (
                        <div
                          key={ss.id}
                          onClick={() => setLightboxIndex(overallIdx)}
                          className="group relative rounded-xl border border-border bg-card overflow-hidden cursor-pointer shadow-sm hover:border-brand-start/50 hover:shadow-lg transition-all dark:border-[#312929] dark:bg-[#241E1E] aspect-[16/10]"
                        >
                          {ss.image ? (
                            <>
                              <img
                                src={ss.image}
                                alt={ss.caption}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-2.5 sm:p-3">
                                <div className="flex items-center justify-between gap-2">
                                  <p className="text-xs font-medium text-white line-clamp-1 leading-tight">
                                    {ss.caption}
                                  </p>
                                  <Maximize2 className="w-3.5 h-3.5 text-white/70 group-hover:text-white shrink-0" />
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="w-full h-full p-3 flex flex-col justify-between">
                              <div className="flex items-center gap-1 opacity-50">
                                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                                <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                                <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                              </div>
                              <div className="text-center my-auto">
                                <p className="text-xs font-semibold text-foreground/90">{ss.caption}</p>
                              </div>
                              <span className="text-[10px] font-mono text-center text-muted-foreground">{item.name}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Portrait / Mobile Preview Row */}
              {portraitScreens.length > 0 && (
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-brand-start" />
                    <span>Mobile Android Experience</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {portraitScreens.map((ss) => {
                      const overallIdx = item.screenshots.findIndex((s) => s.id === ss.id);
                      return (
                        <div
                          key={ss.id}
                          onClick={() => setLightboxIndex(overallIdx)}
                          className="group relative rounded-xl border border-border bg-card overflow-hidden cursor-pointer shadow-sm hover:border-brand-start/50 hover:shadow-lg transition-all dark:border-[#312929] dark:bg-[#241E1E] aspect-[9/16]"
                        >
                          {ss.image ? (
                            <>
                              <img
                                src={ss.image}
                                alt={ss.caption}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-2 sm:p-2.5">
                                <div className="flex items-center justify-between gap-1">
                                  <p className="text-[11px] font-medium text-white line-clamp-2 leading-tight">
                                    {ss.caption}
                                  </p>
                                  <Maximize2 className="w-3 h-3 text-white/70 group-hover:text-white shrink-0" />
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="w-full h-full p-2.5 flex flex-col justify-between">
                              <span className="w-6 h-0.5 rounded-full bg-foreground/20 mx-auto" />
                              <div className="text-center my-auto">
                                <p className="text-[11px] font-semibold text-foreground/90">{ss.caption}</p>
                              </div>
                              <span className="text-[9px] font-mono text-center text-muted-foreground">{item.name}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Unclassified / Default Preview Row */}
              {unclassifiedScreens.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {unclassifiedScreens.map((ss) => {
                    const overallIdx = item.screenshots.findIndex((s) => s.id === ss.id);
                    return (
                      <div
                        key={ss.id}
                        onClick={() => setLightboxIndex(overallIdx)}
                        className="group relative rounded-xl border border-border bg-card overflow-hidden cursor-pointer shadow-sm hover:border-brand-start/50 hover:shadow-lg transition-all dark:border-[#312929] dark:bg-[#241E1E] aspect-[16/10]"
                      >
                        {ss.image ? (
                          <>
                            <img
                              src={ss.image}
                              alt={ss.caption}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-2.5">
                              <p className="text-xs font-medium text-white line-clamp-1 leading-tight">
                                {ss.caption}
                              </p>
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full p-3 flex flex-col justify-between">
                            <div className="text-center my-auto">
                              <p className="text-xs font-semibold text-foreground/90">{ss.caption}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2 border-t border-border/60 dark:border-[#312929]/50 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-mono text-muted-foreground mr-2">Tech:</span>
              {item.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-muted border border-border text-muted-foreground dark:bg-white/5 dark:border-white/10 dark:text-[#A19898]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Full-Screen Screenshot Lightbox Viewer */}
      <AnimatePresence>
        {lightboxIndex !== null && item.screenshots[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
          >
            {/* Close Lightbox */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
              aria-label="Close screenshot"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous Screenshot */}
            {lightboxIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(lightboxIndex - 1);
                }}
                className="absolute left-4 sm:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Screenshot */}
            {lightboxIndex < item.screenshots.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(lightboxIndex + 1);
                }}
                className="absolute right-4 sm:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Lightbox Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            >
              {item.screenshots[lightboxIndex].image ? (
                <img
                  src={item.screenshots[lightboxIndex].image}
                  alt={item.screenshots[lightboxIndex].caption}
                  className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/15"
                />
              ) : (
                <div className="w-96 h-64 rounded-xl bg-[#241E1E] border border-white/10 flex items-center justify-center p-6 text-center text-white">
                  <p className="text-sm font-semibold">{item.screenshots[lightboxIndex].caption}</p>
                </div>
              )}

              {/* Caption Bar */}
              <div className="mt-3 px-4 py-1.5 rounded-full bg-black/60 border border-white/10 text-white text-xs font-mono text-center">
                <span>{item.screenshots[lightboxIndex].caption}</span>
                <span className="text-white/40 ml-2">({lightboxIndex + 1}/{item.screenshots.length})</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
