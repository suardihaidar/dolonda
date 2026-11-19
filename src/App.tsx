import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { SelectedWork } from './components/sections/SelectedWork';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col selection:bg-lime-accent selection:text-ink">
      {/* 1. Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Selected Work Section */}
        <SelectedWork />

        {/* Placeholder Sections for remaining stages */}
        <section id="services" className="py-24 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle">
          <span className="font-mono text-xs text-ink-subtle uppercase">Next: Section 04 — Services</span>
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
