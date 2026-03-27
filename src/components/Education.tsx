"use client";

import { motion } from "framer-motion";
import { Terminal, TerminalLine } from "./Terminal";
import { Education as EducationType } from "@/types";

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-20 px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--terminal-green)] mb-8">
          <span className="text-[var(--terminal-amber)]">#</span> Education
        </h2>

        <Terminal title="education.log">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.school}-${edu.degree}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-[var(--terminal-cyan)] pl-4"
              >
                <TerminalLine prompt="┌──">
                  <span className="text-[var(--terminal-amber)] font-bold">
                    {edu.school}
                  </span>
                </TerminalLine>

                <div className="pl-6 space-y-1">
                  <div className="flex flex-wrap gap-2 items-center text-sm">
                    <span className="text-[var(--terminal-cyan)]">{edu.degree}</span>
                    <span className="text-gray-500">in</span>
                    <span className="text-gray-300">{edu.field}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 items-center text-sm text-gray-400">
                    <span>{edu.period}</span>
                  </div>

                  {edu.thesis && (
                    <div className="mt-2 text-sm">
                      <span className="text-[var(--terminal-amber)]">Thesis:</span>{" "}
                      <span className="text-gray-300">{edu.thesis}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Terminal>
      </motion.div>
    </section>
  );
}
