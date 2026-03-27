"use client";

import { motion } from "framer-motion";
import { Terminal, TerminalLine } from "./Terminal";
import { Profile } from "@/types";

interface AboutProps {
  profile: Profile;
}

export function About({ profile }: AboutProps) {
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
          <span className="text-[var(--terminal-amber)]">#</span> About Me
        </h2>

        <Terminal title="about.sh">
          <div className="space-y-4">
            <TerminalLine prompt="$">
              <span className="text-[var(--terminal-cyan)]">cat</span> profile.json
            </TerminalLine>

            <div className="pl-4 border-l-2 border-[var(--border)] space-y-3">
              <div className="flex gap-2">
                <span className="text-[var(--terminal-amber)]">"name":</span>
                <span className="text-[var(--terminal-green)]">"{profile.name}"</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[var(--terminal-amber)]">"title":</span>
                <span className="text-[var(--terminal-green)]">"{profile.title}"</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[var(--terminal-amber)]">"location":</span>
                <span className="text-[var(--terminal-green)]">"{profile.location}"</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[var(--terminal-amber)]">"email":</span>
                <span className="text-[var(--terminal-green)]">"{profile.email}"</span>
              </div>
              {profile.phone && (
                <div className="flex gap-2">
                  <span className="text-[var(--terminal-amber)]">"phone":</span>
                  <span className="text-[var(--terminal-green)]">"{profile.phone}"</span>
                </div>
              )}
            </div>

            <TerminalLine prompt="$">
              <span className="text-[var(--terminal-cyan)]">echo</span>{" "}
              <span className="text-gray-400">"$SUMMARY"</span>
            </TerminalLine>

            <div className="text-gray-300 leading-relaxed">
              {profile.summary.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </Terminal>
      </motion.div>
    </section>
  );
}
