import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'bali-villa',
    number: '01',
    title: 'Bali Villa Website',
    category: 'Hospitality Web Experience',
    isConcept: true,
    description:
      'A serene digital presence for a fictional Bali boutique villa. The challenge: express warmth and locality without resorting to generic stock imagery tropes or bloated carousels.',
    role: 'Design & Frontend Development',
    architectureNote:
      'Built on a mobile-first grid that scales from a single-column portrait view to a full editorial spread at viewport widths above 1024px. Reservation touchpoints are contextually placed rather than globally repeated — every CTA earns its position in the layout.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
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
      'A dense data-rich interface for software teams that relies on information hierarchy rather than decorative chrome. Metrics are readable at a glance; complexity is organised, not hidden.',
    role: 'Frontend Architecture & UI Engineering',
    architectureNote:
      'Component architecture uses strict TypeScript interfaces for every data shape. Layout adapts from a stacked single-column mobile view to a 12-column CSS grid desktop layout. No third-party charting library — data visualisation is achieved through native CSS proportional bars, keeping the bundle lightweight.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrlPlaceholder: 'https://saas-concept.dolonda.com',
    repoUrlPlaceholder: 'https://github.com/suard/saas-dashboard-concept',
    previewNote: 'Concept Project — Not commissioned client work',
  },
];
