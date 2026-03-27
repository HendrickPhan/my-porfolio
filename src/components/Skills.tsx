"use client";

import { motion } from "framer-motion";
import { Terminal, TerminalLine } from "./Terminal";
import { Skill } from "@/types";
import { useLanguage } from "@/lib/i18n";

interface SkillsProps {
  skills: Skill[];
}

const categoryOrder = ["language", "ai", "blockchain", "framework", "database", "devops", "cloud"];

export function Skills({ skills }: SkillsProps) {
  const { t } = useLanguage();

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--terminal-green)] mb-8">
          <span className="text-[var(--terminal-amber)]">#</span> {t.skills.title}
        </h2>

        <Terminal title="skills.py">
          <div className="space-y-6">
            {categoryOrder.map((category) => {
              const categorySkills = groupedSkills[category];
              if (!categorySkills) return null;

              return (
                <div key={category}>
                  <TerminalLine prompt=">>>">
                    <span className="text-[var(--terminal-amber)]">
                      {t.skills.categories[category as keyof typeof t.skills.categories]}
                    </span>
                    <span className="text-gray-400">.load()</span>
                  </TerminalLine>

                  <div className="flex flex-wrap gap-2 mt-3 pl-4">
                    {categorySkills.map((skill, index) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.03 }}
                        viewport={{ once: true }}
                        className="px-3 py-1.5 text-sm bg-[var(--muted)] border border-[var(--border)] text-[var(--terminal-green)] hover:border-[var(--terminal-green)] hover:shadow-[0_0_10px_var(--terminal-green)] transition-all duration-200"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Terminal>
      </motion.div>
    </section>
  );
}
