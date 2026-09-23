export type SkillGroup = { title: string; items: string[] };
export type Experience = { role: string; company: string; companyUrl?: string; period: string; type: string; bullets: string[]; tech: string[] };
export type ProjectLink = { label: string; url: string };
export type Project = {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  tech: string[];
  featured?: boolean;
  private?: boolean;
  href?: string;
  links?: ProjectLink[];
};
export type Award = { icon: string; title: string; company: string; date: string };
