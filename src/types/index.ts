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
  technologies: string[];
  features: string[];
  liveUrlPlaceholder?: string;
  repoUrlPlaceholder?: string;
  previewNote: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
}

export interface TechItem {
  name: string;
  category: 'core' | 'framework' | 'styling' | 'tooling';
  highlight?: boolean;
}

export interface ContactInfo {
  email: string;
  whatsappPlaceholder: string;
  linkedinPlaceholder: string;
  githubPlaceholder: string;
  availability: string;
  location: string;
}
