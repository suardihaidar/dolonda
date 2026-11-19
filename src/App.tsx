import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col justify-between p-8 sm:p-12 md:p-20">
      <header className="max-w-container mx-auto w-full flex justify-between items-center pb-8 border-b border-border-subtle">
        <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
          Dolonda<span className="text-lime-accent">.</span>
        </span>
        <span className="font-mono text-xs uppercase tracking-wider text-ink-muted bg-canvas-subtle px-3 py-1 rounded-full border border-border-subtle">
          Stage 2: Foundation Active
        </span>
      </header>

      <main className="max-w-container mx-auto w-full my-auto py-16">
        <div className="space-y-6 max-w-2xl">
          <p className="font-mono text-xs text-indigo-accent uppercase tracking-widest font-medium">
            00 / System Foundation
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-tight">
            Building thoughtful digital experiences<span className="text-lime-accent">.</span>
          </h1>
          <p className="font-body text-ink-muted text-lg sm:text-xl leading-relaxed">
            Dolonda is a founder-led creative development practice by Suardi. Scaffolded with React, TypeScript, Vite, and Tailwind CSS with custom editorial tokens.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-3.5 py-1.5 rounded-md bg-ink text-canvas font-mono text-xs">#202020 Charcoal</span>
            <span className="px-3.5 py-1.5 rounded-md bg-lime-accent text-ink font-mono text-xs font-semibold">#C7F36B Lime</span>
            <span className="px-3.5 py-1.5 rounded-md bg-indigo-accent text-white font-mono text-xs">#7067E8 Indigo</span>
            <span className="px-3.5 py-1.5 rounded-md bg-canvas-card border border-border-subtle text-ink font-mono text-xs">#F5F3EE Canvas</span>
          </div>
        </div>
      </main>

      <footer className="max-w-container mx-auto w-full pt-8 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-center text-xs text-ink-subtle font-mono">
        <span>© 2026 Dolonda — All rights reserved</span>
        <span className="mt-2 sm:mt-0">Vite + React + TypeScript + Tailwind</span>
      </footer>
    </div>
  );
};

export default App;
