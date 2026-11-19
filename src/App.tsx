import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col selection:bg-lime-accent selection:text-ink">
      {/* 1. Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* Placeholder Sections for remaining stages */}
        <section id="work" className="py-24 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle">
          <span className="font-mono text-xs text-ink-subtle uppercase">Next: Section 03 — Selected Work</span>
          <h2 className="font-heading text-3xl font-bold text-ink mt-2">Selected Work</h2>
        </section>

        <section id="services" className="py-24 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle">
          <span className="font-mono text-xs text-ink-subtle uppercase">Section 04</span>
          <h2 className="font-heading text-3xl font-bold text-ink mt-2">Services</h2>
        </section>

        <section id="about" className="py-24 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle">
          <span className="font-mono text-xs text-ink-subtle uppercase">Section 05</span>
          <h2 className="font-heading text-3xl font-bold text-ink mt-2">About Suardi</h2>
        </section>

        <section id="contact" className="py-24 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle">
          <span className="font-mono text-xs text-ink-subtle uppercase">Section 06</span>
          <h2 className="font-heading text-3xl font-bold text-ink mt-2">Contact</h2>
        </section>
      </main>

      <footer className="py-8 px-6 sm:px-8 md:px-12 border-t border-border-subtle text-center text-xs text-ink-subtle font-mono">
        © 2026 Dolonda — Founder-led Creative Development
      </footer>
    </div>
  );
};

export default App;
