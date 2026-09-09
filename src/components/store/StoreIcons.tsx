import React from "react";
import {
  Tv,
  Music,
  Layout,
  CheckCircle2,
  Dumbbell,
  Gamepad2,
  Crosshair,
  Library,
  Boxes,
  Sparkles,
  Smartphone,
  Monitor,
  Globe,
  Terminal,
  Layers,
  Download,
  ExternalLink,
  ChevronRight,
  Info,
  Check,
  Shield,
  Clock,
  Code2,
  Package,
  ArrowUpRight,
  AlertCircle
} from "lucide-react";

export function getStoreIcon(name: string, className?: string) {
  const props = { className: className || "w-5 h-5" };
  switch (name) {
    case "Tv":
      return <Tv {...props} />;
    case "Music":
      return <Music {...props} />;
    case "Layout":
      return <Layout {...props} />;
    case "CheckCircle2":
      return <CheckCircle2 {...props} />;
    case "Dumbbell":
      return <Dumbbell {...props} />;
    case "Gamepad2":
      return <Gamepad2 {...props} />;
    case "Crosshair":
      return <Crosshair {...props} />;
    case "Library":
      return <Library {...props} />;
    case "Boxes":
      return <Boxes {...props} />;
    case "Smartphone":
      return <Smartphone {...props} />;
    case "Monitor":
      return <Monitor {...props} />;
    case "Globe":
      return <Globe {...props} />;
    case "Terminal":
      return <Terminal {...props} />;
    case "Layers":
      return <Layers {...props} />;
    default:
      return <Package {...props} />;
  }
}

export {
  Download,
  ExternalLink,
  ChevronRight,
  Info,
  Check,
  Shield,
  Clock,
  Code2,
  Package,
  ArrowUpRight,
  Smartphone,
  Monitor,
  Globe,
  Layers,
  Sparkles,
  AlertCircle
};
