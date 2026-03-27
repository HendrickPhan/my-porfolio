"use client";

import { motion } from "framer-motion";
import { Terminal, TerminalLine } from "./Terminal";
import { Profile } from "@/types";
import { useLanguage } from "@/lib/i18n";

interface AboutProps {
  profile: Profile;
}

export function About({ profile }: AboutProps) {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--terminal-green)] mb-8">
          <span className="text-[var(--terminal-amber)]">#</span> {t.about.title}
        </h2>

        <Terminal title="about.sh">
          <div className="space-y-4">
            <TerminalLine prompt="$">
              <span className="text-[var(--terminal-cyan)]">cat</span> profile.json
            </TerminalLine>

            <div className="pl-4 border-l-2 border-[var(--border)] space-y-3">
              <div className="flex gap-2">
                <span className="text-[var(--terminal-amber)]">"{t.about.name}":</span>
                <span className="text-[var(--terminal-green)]">"{profile.name}"</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[var(--terminal-amber)]">"{t.about.jobTitle}":</span>
                <span className="text-[var(--terminal-green)]">"{t.profile.title}"</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[var(--terminal-amber)]">"{t.about.location}":</span>
                <span className="text-[var(--terminal-green)]">"{profile.location}"</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[var(--terminal-amber)]">"{t.about.email}":</span>
                <span className="text-[var(--terminal-green)]">"{profile.email}"</span>
              </div>
              {profile.phone && (
                <div className="flex gap-2">
                  <span className="text-[var(--terminal-amber)]">"{t.about.phone}":</span>
                  <span className="text-[var(--terminal-green)]">"{profile.phone}"</span>
                </div>
              )}
            </div>

            <TerminalLine prompt="$">
              <span className="text-[var(--terminal-cyan)]">echo</span>{" "}
              <span className="text-gray-400">"$SUMMARY"</span>
            </TerminalLine>

            <div className="text-gray-300 leading-relaxed">
              {t.profile.summary}
            </div>
          </div>
        </Terminal>
      </motion.div>
    </section>
  );
}
