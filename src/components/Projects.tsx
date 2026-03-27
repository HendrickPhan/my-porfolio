"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Star } from "lucide-react";
import { Terminal, TerminalLine } from "./Terminal";
import { Project } from "@/types";
import { useLanguage } from "@/lib/i18n";

interface ProjectsProps {
  projects: Project[];
}

// Map project names to translation keys
const projectKeyMap: Record<string, string> = {
  "Fichain - Layer 1 Blockchain": "fichain",
  "AI Stock Trading Platform": "aiTrading",
  "Cross-chain Bridge DApp": "crossChain",
  "Binary Tree MLM System": "binaryMlm",
  "ID Verification System": "idVerification",
};

export function Projects({ projects }: ProjectsProps) {
  const { t } = useLanguage();

  // Get translated project info
  const getTranslatedProject = (projectName: string) => {
    const key = projectKeyMap[projectName];
    const projectTranslations = (t as unknown as Record<string, unknown>).projects;
    if (key && projectTranslations && typeof projectTranslations === 'object') {
      return (projectTranslations as Record<string, { name?: string; description?: string; highlights?: string[] }>)[key];
    }
    return null;
  };

  return (
    <section id="projects" className="py-20 px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--terminal-green)] mb-8">
          <span className="text-[var(--terminal-amber)]">#</span> {t.projects.title}
        </h2>

        <Terminal title="projects.json">
          <div className="space-y-4">
            {projects.map((project, index) => {
              const translated = getTranslatedProject(project.name);
              const name = translated?.name || project.name;
              const description = translated?.description || project.description;
              const highlights = translated?.highlights || project.highlights || [];

              return (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-[var(--border)] p-4 hover:border-[var(--terminal-green)] transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <TerminalLine prompt="─">
                        <span className="text-[var(--terminal-amber)] font-bold text-lg">
                          {name}
                        </span>
                      </TerminalLine>

                      <p className="text-gray-300 text-sm mt-2 pl-6">
                        {description}
                      </p>

                      {highlights.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2 pl-6">
                          {highlights.map((highlight: string) => (
                            <span
                              key={highlight}
                              className="inline-flex items-center gap-1 text-xs text-[var(--terminal-amber)]"
                            >
                              <Star className="w-3 h-3" />
                              {highlight}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mt-3 pl-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-[var(--muted)] border border-[var(--border)] text-[var(--terminal-cyan)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-[var(--border)] text-gray-400 hover:text-[var(--terminal-green)] hover:border-[var(--terminal-green)] transition-colors"
                          title="View on GitHub"
                        >
                          <GitBranch className="w-4 h-4" />
                        </a>
                      )}
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-[var(--border)] text-gray-400 hover:text-[var(--terminal-amber)] hover:border-[var(--terminal-amber)] transition-colors"
                          title="Visit website"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Terminal>
      </motion.div>
    </section>
  );
}
