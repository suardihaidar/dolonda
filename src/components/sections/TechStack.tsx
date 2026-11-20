import React from 'react';
import { techStack } from '../../data/techStack';
import { SectionHeading } from '../ui/SectionHeading';
import { TechBadge } from '../ui/TechBadge';

export const TechStack: React.FC = () => {
  return (
    <section
      id="tech-stack"
      className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle"
      aria-label="Technologies and Technical Capabilities"
    >
      <div className="space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            label="04 / Technologies"
            title="Vetted Technology Stack"
            description="A focused, modern engineering toolkit mastered through hands-on development—prioritizing performance, type safety, and maintainability."
          />
          <div className="hidden md:block text-right font-mono text-xs text-ink-subtle">
            10 Production Vetted Tools
          </div>
        </div>

        {/* Clean Categorized Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {techStack.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
        </div>

        {/* Technical Philosophy Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-canvas-card border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-wider text-indigo-accent font-semibold">
              Zero Bloat Philosophy
            </span>
            <p className="font-body text-xs sm:text-sm text-ink-muted leading-relaxed">
              I favor clean web standards, strict TypeScript, and utility-first Tailwind CSS over heavy external component suites or fragile dependencies. Every tool in this stack is backed by day-to-day production proficiency.
            </p>
          </div>
          <span className="font-mono text-[11px] text-ink-subtle shrink-0">
            Strict Typing · Edge Optimized
          </span>
        </div>
      </div>
    </section>
  );
};
