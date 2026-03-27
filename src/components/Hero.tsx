"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal } from "./Terminal";
import { SocialLinks } from "./SocialLinks";
import { DownloadResume } from "./DownloadResume";
import { Profile } from "@/types";
import { useLanguage } from "@/lib/i18n";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState("");
  const fullText = `${t.hero.greeting} ${profile.name}.`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full relative z-10"
      >
        <Terminal title="minh-hieu@portfolio ~ ./intro.sh">
          <div className="space-y-6">
            <div className="text-2xl md:text-4xl font-bold">
              <span className="text-[var(--terminal-green)]">{typedText}</span>
              <span className="animate-pulse">_</span>
            </div>

            <div className="text-xl md:text-2xl text-[var(--terminal-amber)]">
              {`> ${t.profile.title}`}
            </div>

            <div className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
              <span className="text-[var(--terminal-cyan)]">//</span>{" "}
              {t.profile.summary}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start pt-4">
              <SocialLinks links={profile.social} />
            </div>

            <div className="pt-4">
              <DownloadResume />
            </div>
          </div>
        </Terminal>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-8 text-center"
        >
          <a
            href="#about"
            className="inline-flex flex-col items-center text-[var(--terminal-green)] hover:text-[var(--terminal-amber)] transition-colors"
          >
            <span className="text-sm mb-2">{t.hero.scrollHint}</span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
