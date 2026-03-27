"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Terminal, TerminalLine } from "./Terminal";
import { Button } from "./ui/Button";
import { Input, Textarea } from "./ui/Input";
import { DownloadResume } from "./DownloadResume";
import { Profile } from "@/types";
import { useLanguage } from "@/lib/i18n";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

interface ContactProps {
  profile: Profile;
}

export function Contact({ profile }: ContactProps) {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--terminal-green)] mb-8">
          <span className="text-[var(--terminal-amber)]">#</span> {t.contact.title}
        </h2>

        <Terminal title="contact_form.sh">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <TerminalLine prompt="$">
                <span className="text-[var(--terminal-cyan)]">echo</span>{" "}
                <span className="text-gray-400">"{t.contact.letsConnect}"</span>
              </TerminalLine>

              <p className="text-gray-300 text-sm mt-4 mb-6 leading-relaxed">
                {t.contact.description}
              </p>

              <div className="space-y-3">
                <TerminalLine prompt="→">
                  <span className="text-[var(--terminal-amber)]">{t.contact.email}:</span>{" "}
                  <a href={`mailto:${profile.email}`} className="text-[var(--terminal-green)] hover:underline">
                    {profile.email}
                  </a>
                </TerminalLine>
                {profile.phone && (
                  <TerminalLine prompt="→">
                    <span className="text-[var(--terminal-amber)]">{t.contact.phone}:</span>{" "}
                    <span className="text-gray-300">{profile.phone}</span>
                  </TerminalLine>
                )}
                <TerminalLine prompt="→">
                  <span className="text-[var(--terminal-amber)]">{t.contact.location}:</span>{" "}
                  <span className="text-gray-300">{profile.location}</span>
                </TerminalLine>
              </div>

              <div className="mt-6">
                <DownloadResume />
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                label={t.contact.form.name}
                placeholder={t.contact.form.namePlaceholder}
                error={errors.name?.message}
                {...register("name")}
              />

              <Input
                label={t.contact.form.email}
                type="email"
                placeholder={t.contact.form.emailPlaceholder}
                error={errors.email?.message}
                {...register("email")}
              />

              <Input
                label={t.contact.form.subject}
                placeholder={t.contact.form.subjectPlaceholder}
                error={errors.subject?.message}
                {...register("subject")}
              />

              <Textarea
                label={t.contact.form.message}
                placeholder={t.contact.form.messagePlaceholder}
                rows={4}
                error={errors.message?.message}
                {...register("message")}
              />

              <Button type="submit" disabled={isSubmitting} className="w-full">
                <Send className="w-4 h-4" />
                {isSubmitting ? t.contact.form.sending : t.contact.form.send}
              </Button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-[var(--terminal-green)] text-sm"
                >
                  <CheckCircle className="w-4 h-4" />
                  {t.contact.form.success}
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-[var(--terminal-red)] text-sm"
                >
                  <AlertCircle className="w-4 h-4" />
                  {t.contact.form.error}
                </motion.div>
              )}
            </form>
          </div>
        </Terminal>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          <TerminalLine prompt="$">
            <span className="text-[var(--terminal-cyan)]">exit</span> 0
          </TerminalLine>
          <p className="mt-2">© {new Date().getFullYear()} {">"} {t.footer.built}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
