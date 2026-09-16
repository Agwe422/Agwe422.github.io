export type ButtonVariant = "primary" | "secondary" | "ghost";

export type NavItem = {
  label: string;
  to: string;
};

export type CtaLink = {
  label: string;
  variant: ButtonVariant;
  to?: string;
  href?: string;
};

export type Person = {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  github: string;
  itchIo: string;
};

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  slug: string;
  dates: string;
  type: string;
  discipline: string;
  stack: string[];
  bullets: string[];
  links: ProjectLink[];
};

export type ExperienceEntry = {
  role: string;
  org: string;
  slug: string;
  location: string;
  dates: string;
  focus: string;
  stack: string[];
  bullets: string[];
  links: ProjectLink[];
};

export type Education = {
  school: string;
  location: string;
  dates: string;
  degree: string;
  gpa: string;
  honors: string;
  coursework: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type LeadershipEntry = {
  title: string;
  dates: string;
};

export type PageTitles = {
  home: string;
  projects: string;
  experience: string;
  skills: string;
  education: string;
  leadership: string;
  contact: string;
  resume: string;
  notFound: string;
};

export type Labels = {
  about: string;
  featuredProjects: string;
  cta: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  itchIo: string;
  highlights: string;
  techStack: string;
  links: string;
  linksComingSoon: string;
  media: string;
  addScreenshots: string;
  copyEmail: string;
  copiedEmail: string;
  downloadResume: string;
  resumeViewer: string;
  resumeFallback: string;
  linkedIn: string;
  notFoundMessage: string;
  backHome: string;
  coursework: string;
  disciplines: string;
  filters: string;
  searchTags: string;
  searchTagsPlaceholder: string;
  clearFilters: string;
  selectedTags: string;
  noProjects: string;
  experienceTimeline: string;
  viewAllExperience: string;
  onThisPage: string;
  skipToContent: string;
  viewDetailsFor: string;
  primaryNav: string;
};

export type SiteContent = {
  person: Person;
  heroTagline: string;
  aboutText: string;
  nav: NavItem[];
  pageTitles: PageTitles;
  labels: Labels;
  ctas: CtaLink[];
  experience: ExperienceEntry[];
  projects: Project[];
  education: Education;
  skills: SkillGroup[];
  leadership: LeadershipEntry[];
};
