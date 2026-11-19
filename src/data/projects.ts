import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'bali-villa',
    number: '01',
    title: 'Bali Villa Website',
    category: 'Hospitality Web Experience',
    isConcept: true,
    description:
      'A serene, responsive digital presence for a fictional Bali luxury boutique villa brand. Designed with editorial typography, generous imagery framing, and high-conversion reservation touchpoints.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Responsive landing page layout',
      'Property architecture & accommodation showcase',
      'Contextual booking inquiry CTAs',
      'Direct WhatsApp booking integration placeholder',
    ],
    liveUrlPlaceholder: 'https://villa-concept.dolonda.com',
    repoUrlPlaceholder: 'https://github.com/suard/bali-villa-concept',
    previewNote: 'Concept Project — Not commissioned client work',
  },
  {
    id: 'saas-dashboard',
    number: '02',
    title: 'SaaS Analytics Dashboard',
    category: 'Web Application Interface',
    isConcept: true,
    description:
      'A responsive analytics dashboard interface designed for modern software teams. Features modular metric overview widgets, interactive data visualization tables, and intuitive filtering controls.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    features: [
      'High-level metrics and performance overview',
      'Realistic mock analytics data representation',
      'Dynamic charts and data tables',
      'Search, filtering, and responsive navigation controls',
    ],
    liveUrlPlaceholder: 'https://saas-concept.dolonda.com',
    repoUrlPlaceholder: 'https://github.com/suard/saas-dashboard-concept',
    previewNote: 'Concept Project — Not commissioned client work',
  },
];
