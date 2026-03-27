"use client";

import { useLanguage } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "vi" : "en")}
      className="flex items-center gap-2 px-3 py-1.5 border border-[var(--border)] text-[var(--terminal-green)] hover:border-[var(--terminal-green)] hover:bg-[var(--terminal-green)] hover:text-[var(--background)] transition-all duration-200 text-sm"
      title={language === "en" ? "Chuyển sang Tiếng Việt" : "Switch to English"}
    >
      <Globe className="w-4 h-4" />
      <span>{language === "en" ? "VI" : "EN"}</span>
    </button>
  );
}
