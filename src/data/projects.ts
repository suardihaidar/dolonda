import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'lorongsatu21-pos',
    number: '01',
    title: 'Lorongsatu 21 POS',
    category: 'Retail Point of Sale',
    badgeLabel: 'Client Work',
    badgeTone: 'commissioned',
    description:
      'An offline-first desktop point of sale for a retail store selling clothing, stationery, and photocopy services. The cashiers are not technical users, so the interface is built around large targets, keyboard-driven checkout, and hardware that works without an internet connection. Currently in pilot with the store.',
    role: 'Architecture & Full-Stack Development',
    architectureNote:
      'The renderer never touches the database. All SQLite access is confined to the Electron main process and exposed to React through a typed context bridge across twelve IPC namespaces, so the UI has no direct path to the file system. Money is stored as integer cents to eliminate floating-point drift, and shift close uses a blind count: the cashier enters physical cash before the system reveals the expected total, making discrepancies observable rather than self-reportable.',
    technologies: [
      'Electron',
      'React',
      'TypeScript',
      'SQLite',
      'Tailwind CSS',
      'Zustand',
    ],
    previewImage: '/work/lorongsatu21-collage.webp',
    previewNote: 'Commissioned client work — pilot deployment',
  },
  {
    id: 'bali-villa',
    number: '02',
    title: 'Bali Villa Website',
    category: 'Hospitality Web Experience',
    badgeLabel: 'Concept Study',
    badgeTone: 'concept',
    description:
      'A serene digital presence for a fictional Bali boutique villa. The challenge: express warmth and locality without resorting to generic stock imagery tropes or bloated carousels.',
    role: 'Design & Frontend Development',
    architectureNote:
      'Built on a mobile-first grid that scales from a single-column portrait view to a full editorial spread at viewport widths above 1024px. Reservation touchpoints are contextually placed rather than globally repeated — every CTA earns its position in the layout.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    previewNote: 'Concept Project — Not commissioned client work',
  },
  {
    id: 'saas-dashboard',
    number: '03',
    title: 'SaaS Analytics Dashboard',
    category: 'Web Application Interface',
    badgeLabel: 'Concept Study',
    badgeTone: 'concept',
    description:
      'A dense data-rich interface for software teams that relies on information hierarchy rather than decorative chrome. Metrics are readable at a glance; complexity is organised, not hidden.',
    role: 'Frontend Architecture & UI Engineering',
    architectureNote:
      'Component architecture uses strict TypeScript interfaces for every data shape. Layout adapts from a stacked single-column mobile view to a 12-column CSS grid desktop layout. No third-party charting library — data visualisation is achieved through native CSS proportional bars, keeping the bundle lightweight.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    previewNote: 'Concept Project — Not commissioned client work',
  },
];
