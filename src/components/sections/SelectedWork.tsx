import React from 'react';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';

export const SelectedWork: React.FC = () => {
  return (
    <section
      id="work"
      className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle"
      aria-label="Selected Work"
    >
      {/* Section header — editorial label format */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-16">
        <div className="space-y-2">
          <span className="font-mono text-xs text-ink-subtle uppercase tracking-widest">01 / Work</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-ink tracking-tight leading-tight">
            Selected Work
          </h2>
        </div>
        <p className="font-body text-sm text-ink-muted max-w-sm leading-relaxed">
          Client work and concept studies — frontend architecture, design-to-code craft, and
          responsive user experience.
        </p>
      </div>

      {/* Projects — full-bleed editorial layout, not a card grid */}
      <div className="space-y-16 sm:space-y-20">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Authenticity footnote — inline text, not a banner card */}
      <p className="mt-12 font-mono text-xs text-ink-subtle border-t border-border-subtle pt-6">
        Concept studies are self-initiated explorations of technical architecture and responsive
        discipline, not commissioned client work. — Suardi, {new Date().getFullYear()}
      </p>
    </section>
  );
};
