"use client";

import { motion } from "framer-motion";
import { Terminal, TerminalLine } from "./Terminal";
import { Experience as ExperienceType } from "@/types";

interface ExperienceProps {
  experience: ExperienceType[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--terminal-green)] mb-8">
          <span className="text-[var(--terminal-amber)]">#</span> Experience
        </h2>

        <Terminal title="work_history.log">
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-[var(--terminal-green)] pl-4 pb-6 last:pb-0"
              >
                <TerminalLine prompt="┌──">
                  <span className="text-[var(--terminal-amber)] font-bold">
                    {exp.company}
                  </span>
                </TerminalLine>

                <div className="pl-6 space-y-2">
                  <div className="flex flex-wrap gap-2 items-center text-sm">
                    <span className="text-[var(--terminal-cyan)]">{exp.position}</span>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-400">{exp.period}</span>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-400">{exp.location}</span>
                  </div>

                  <ul className="space-y-2 text-gray-300 text-sm">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[var(--terminal-green)]">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-[var(--muted)] border border-[var(--border)] text-[var(--terminal-green)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Terminal>
      </motion.div>
    </section>
  );
}
