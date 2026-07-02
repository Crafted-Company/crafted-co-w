import * as React from "react";
import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  if (!content) return null;

  const lines = content.split("\n");
  const renderedElements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let inList = false;
  let listItems: React.ReactNode[] = [];

  const flushList = (key: number) => {
    if (listItems.length > 0) {
      renderedElements.push(
        <ul key={`list-${key}`} className="list-disc pl-6 my-4 space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
          {listItems}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  const flushCodeBlock = (key: number) => {
    if (codeLines.length > 0) {
      renderedElements.push(
        <pre key={`code-${key}`} className="bg-secondary/40 dark:bg-secondary/20 border border-border/60 p-4 rounded-xl my-5 overflow-x-auto text-xs font-mono leading-relaxed text-foreground">
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
      codeLines = [];
      inCodeBlock = false;
    }
  };

  lines.forEach((line, idx) => {
    // Code blocks
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        flushCodeBlock(idx);
      } else {
        flushList(idx);
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      return;
    }

    // Headers
    if (line.startsWith("# ")) {
      flushList(idx);
      renderedElements.push(
        <h1 key={idx} className="font-serif text-2xl md:text-3xl font-bold mt-6 mb-4 text-foreground">
          {line.substring(2)}
        </h1>
      );
      return;
    }
    if (line.startsWith("## ")) {
      flushList(idx);
      renderedElements.push(
        <h2 key={idx} className="font-serif text-xl md:text-2xl font-semibold mt-6 mb-3 text-foreground">
          {line.substring(3)}
        </h2>
      );
      return;
    }
    if (line.startsWith("### ")) {
      flushList(idx);
      renderedElements.push(
        <h3 key={idx} className="font-serif text-lg md:text-xl font-semibold mt-4 mb-2 text-foreground">
          {line.substring(4)}
        </h3>
      );
      return;
    }

    // Lists
    if (line.trim().startsWith("* ") || line.trim().startsWith("- ")) {
      if (!inList) {
        inList = true;
      }
      listItems.push(
        <li key={idx} className="leading-relaxed">
          {line.trim().substring(2)}
        </li>
      );
      return;
    } else {
      if (inList) {
        flushList(idx);
      }
    }

    // Images
    if (line.trim().startsWith("![") && line.includes("](")) {
      const alt = line.substring(line.indexOf("[") + 1, line.indexOf("]"));
      const src = line.substring(line.indexOf("(") + 1, line.indexOf(")"));
      renderedElements.push(
        <div key={idx} className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border my-6 bg-muted">
          <img src={src} alt={alt} className="object-cover w-full h-full" />
        </div>
      );
      return;
    }

    // Normal paragraphs
    if (line.trim() !== "") {
      renderedElements.push(
        <p key={idx} className="text-sm md:text-base text-muted-foreground leading-relaxed my-4">
          {line}
        </p>
      );
    }
  });

  // Flush remaining elements
  flushList(lines.length);
  flushCodeBlock(lines.length);

  return <div className={cn("prose max-w-none", className)}>{renderedElements}</div>;
}
export default MarkdownRenderer;
