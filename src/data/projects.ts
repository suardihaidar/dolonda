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
    previewImage: '/work/lorongsatu21-1.webp',
    gallery: [
      {
        label: 'Kasir / Checkout',
        caption:
          'Product grid, stock badges, and category filters built for fast, keyboard-driven lookup.',
        src: '/work/lorongsatu21-1.webp',
      },
      {
        label: 'Pembayaran Tunai',
        caption: 'Cash payment with quick-amount keys and live change calculation.',
        src: '/work/lorongsatu21-3.webp',
      },
      {
        label: 'Pembayaran Berhasil',
        caption: 'Receipt preview and print step — the sale is already committed locally.',
        src: '/work/lorongsatu21-4.webp',
      },
      {
        label: 'Shift Gate',
        caption: 'The register stays locked until an opening shift is recorded.',
        src: '/work/lorongsatu21-2.webp',
      },
      {
        label: 'Manajemen Produk',
        caption: 'Inventory table with low-stock alerts, CSV import, and inline editing.',
        src: '/work/lorongsatu21-5.webp',
      },
      {
        label: 'Laporan & Analitik',
        caption: 'Daily sales, expenses, and estimated profit read from the local database.',
        src: '/work/lorongsatu21-6.webp',
      },
      {
        label: 'Pengaturan & Struk',
        caption: 'Store profile and receipt footer with a live preview of the printed output.',
        src: '/work/lorongsatu21-7.webp',
      },
    ],
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
    gallery: [
      {
        label: 'Hero & Navigation',
        mockup: true,
        caption: 'Editorial hero with one contextual booking action instead of a repeated global CTA.',
      },
      {
        label: 'Villa Detail',
        caption: 'Accommodation detail with rate, capacity, and booking context in a single reading column.',
      },
      {
        label: 'Enquiry Flow',
        caption: 'Mobile-first reservation enquiry that keeps the visitor inside the page.',
      },
    ],
  },
];
