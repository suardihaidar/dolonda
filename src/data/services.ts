import { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    number: '01',
    title: 'Website Development',
    description:
      'Designing and developing modern, responsive websites crafted to communicate your brand story with clarity and convert visitors into clients.',
    capabilities: [
      'Conversion-focused landing pages',
      'Professional business websites',
      'Mobile-first responsive architecture',
      'Performance and SEO fundamentals',
    ],
  },
  {
    number: '02',
    title: 'Frontend Development',
    description:
      'Translating design concepts and Figma files into clean, maintainable, and type-safe React applications built for longevity.',
    capabilities: [
      'React and TypeScript engineering',
      'Pixel-perfect Figma-to-code implementation',
      'Modular, reusable UI component systems',
      'Clean state management and UI integration',
    ],
  },
  {
    number: '03',
    title: 'UI Improvements',
    description:
      'Auditing, diagnosing, and polishing existing frontend interfaces to eliminate layout bugs, enhance responsiveness, and elevate visual craft.',
    capabilities: [
      'Responsive layout bug fixes',
      'CSS and Tailwind architecture cleanups',
      'Component-level interaction polish',
      'Form validation and frontend UX refinements',
    ],
  },
];
