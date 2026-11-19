import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { SelectedWork } from './components/sections/SelectedWork';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { TechStack } from './components/sections/TechStack';

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

        {/* 4. Services Section */}
        <Services />

        {/* 5. About Section */}
        <About />

        {/* 6. Technology Stack Section */}
        <TechStack />

        {/* Placeholder Sections for remaining stages */}
        <section id="contact" className="py-24 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle">
          <span className="font-mono text-xs text-ink-subtle uppercase">Next: Section 07 — Contact</span>
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
