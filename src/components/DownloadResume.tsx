"use client";

import { Download } from "lucide-react";

export function DownloadResume() {
  return (
    <a
      href="/Resume.pdf"
      download
      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--terminal-amber)] text-[var(--terminal-amber)] font-mono text-sm uppercase tracking-wider hover:bg-[var(--terminal-amber)] hover:text-[var(--background)] hover:shadow-[0_0_30px_var(--terminal-amber)] transition-all duration-300"
    >
      <Download className="w-4 h-4" />
      Download Resume
    </a>
  );
}
