import { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    number: '01',
    title: 'Website Architecture & Development',
    description:
      'From blank canvas to deployed production site. Responsive, accessible, and built on clean semantic HTML — not on templates.',
    deliverables: ['Landing pages', 'Business websites', 'Mobile-first layouts', 'SEO fundamentals'],
  },
  {
    number: '02',
    title: 'React & TypeScript Engineering',
    description:
      'Figma files turned into strict-typed, maintainable React applications. Component systems designed for longevity, not quick delivery.',
    deliverables: ['Figma-to-code', 'Component systems', 'State management', 'UI integration'],
  },
  {
    number: '03',
    title: 'UI Triage & Craft Elevation',
    description:
      'Existing interfaces diagnosed and improved. Layout bugs resolved, responsiveness corrected, interaction quality raised to match the design intent.',
    deliverables: ['Responsive fixes', 'CSS architecture', 'Interaction polish', 'UX refinements'],
  },
];
