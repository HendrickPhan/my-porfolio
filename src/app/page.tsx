import { MatrixBackground } from "@/components/MatrixBackground";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <main className="relative">
      <MatrixBackground />
      <Navigation />
      <Hero profile={profile} />
      <About profile={profile} />
      <Experience experience={profile.experience} />
      <Skills skills={profile.skills} />
      <Projects projects={profile.projects} />
      <Education education={profile.education} />
      <Contact profile={profile} />
    </main>
  );
}
