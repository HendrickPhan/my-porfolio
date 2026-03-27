export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  period: string;
  thesis?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
  highlights?: string[];
}

export interface Skill {
  name: string;
  category: "language" | "framework" | "tool" | "blockchain" | "ai" | "database" | "devops" | "cloud";
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  summary: string;
  social: SocialLink[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
  publications?: { title: string; authors: string; year: string; description: string }[];
  certificates?: string[];
}
