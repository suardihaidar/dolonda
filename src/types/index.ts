export interface NavItem {
  label: string;
  href: string;
}

export interface ProjectShot {
  label: string;
  caption?: string;
  src?: string;
  mockup?: boolean;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  badgeLabel: string;
  badgeTone: 'concept' | 'commissioned';
  description: string;
  role: string;
  architectureNote: string;
  technologies: string[];
  previewImage?: string;
  previewNote: string;
  gallery: ProjectShot[];
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
