import React from 'react';
import { Navbar } from './components/layout/Navbar';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col selection:bg-lime-accent selection:text-ink">
      {/* 1. Navigation */}
      <Navbar />

      {/* Main Content Areas with Anchor Targets */}
      <main className="flex-1 flex flex-col">
        {/* Placeholder #home / Hero target */}
        <section id="home" className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full">
          <div className="max-w-3xl space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-indigo-accent font-semibold px-3 py-1 rounded-full bg-canvas-subtle border border-border-subtle inline-block">
              Stage 3.1: Navigation Completed
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink leading-tight">
              Building thoughtful digital experiences<span className="text-lime-accent">.</span>
            </h1>
            <p className="font-body text-ink-muted text-lg sm:text-xl leading-relaxed">
              I'm Suardi, an independent creative developer with more than seven years of professional software engineering experience. I help businesses turn ideas into responsive websites and intuitive web applications.
            </p>
          </div>
        </section>

        {/* Placeholder Sections for smooth anchor test */}
        <section id="work" className="py-20 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle">
          <span className="font-mono text-xs text-ink-subtle uppercase">Next: Section 02 — Selected Work</span>
          <h2 className="font-heading text-3xl font-bold text-ink mt-2">Selected Work</h2>
        </section>

        <section id="services" className="py-20 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle">
          <span className="font-mono text-xs text-ink-subtle uppercase">Section 03</span>
          <h2 className="font-heading text-3xl font-bold text-ink mt-2">Services</h2>
        </section>

        <section id="about" className="py-20 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle">
          <span className="font-mono text-xs text-ink-subtle uppercase">Section 04</span>
          <h2 className="font-heading text-3xl font-bold text-ink mt-2">About Suardi</h2>
        </section>

        <section id="contact" className="py-20 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle">
          <span className="font-mono text-xs text-ink-subtle uppercase">Section 05</span>
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
