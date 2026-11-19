import React from 'react';
import { projects } from '../../data/projects';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';

export const SelectedWork: React.FC = () => {
  return (
    <section
      id="work"
      className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle"
      aria-label="Selected Work & Concept Projects"
    >
      <div className="space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            label="01 / Work"
            title="Selected Work"
            description="Explorations in frontend architecture, design-to-code craft, and responsive user experiences."
          />
          <div className="hidden md:block text-right">
            <span className="font-mono text-xs text-ink-subtle">
              Showing 02 Concept Studies
            </span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Authenticity & Integrity Note */}
        <div className="p-6 rounded-2xl bg-canvas-card border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-lime-accent" />
            <p className="font-body text-xs text-ink-muted">
              <strong className="text-ink font-semibold">Honest Attribution:</strong> These projects are self-initiated concept implementations engineered by Suardi to demonstrate technical architecture, responsive discipline, and clean React code.
            </p>
          </div>
          <span className="font-mono text-[11px] text-ink-subtle uppercase tracking-wider shrink-0">
            Concept Lab · 2026
          </span>
        </div>
      </div>
    </section>
  );
};
