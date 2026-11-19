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
          <div className="hidden md:block text-right">
            <span className="font-mono text-xs text-ink-subtle">
              100% Production Vetted Tools
            </span>
          </div>
        </div>

        {/* Badges Grid: 5 columns on desktop, 3 on tablet, 2 on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {techStack.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
        </div>

        {/* Technical Philosophy Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-canvas-card border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <span className="font-mono text-sm text-indigo-accent font-bold mt-0.5">
              [//]
            </span>
            <p className="font-body text-xs sm:text-sm text-ink-muted leading-relaxed max-w-2xl">
              <strong className="text-ink font-semibold">Zero Bloat Philosophy:</strong> I strictly avoid installing unneeded dependencies or heavy UI frameworks. By leveraging semantic HTML, strict TypeScript, and utility-first Tailwind CSS, your codebase remains lightweight, rapid to load, and easy to maintain.
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
