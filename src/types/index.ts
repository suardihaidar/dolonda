export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  isConcept: boolean;
  description: string;
  role: string;
  architectureNote: string;
  technologies: string[];
  liveUrlPlaceholder?: string;
  repoUrlPlaceholder?: string;
  previewNote: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface TechPillar {
  id: string;
  label: string;
  items: string[];
}

export interface ContactInfo {
  email: string;
  whatsappPlaceholder: string;
  linkedinPlaceholder: string;
  githubPlaceholder: string;
  availability: string;
  location: string;
}
