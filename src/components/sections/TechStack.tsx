import React from 'react';
import { techPillars } from '../../data/techStack';

export const TechStack: React.FC = () => {
  return (
    <section
      id="tech-stack"
      className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle"
      aria-label="Technologies and Technical Capabilities"
    >
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-16">
        <div className="space-y-2">
          <span className="font-mono text-xs text-ink-subtle uppercase tracking-widest">04 / Technologies</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-ink tracking-tight leading-tight">
            Architectural Spectrum
          </h2>
        </div>
        <p className="font-body text-sm text-ink-muted max-w-xs leading-relaxed text-left md:text-right">
          A focused toolkit mastered through hands-on production work. No bloat; no gaps.
        </p>
      </div>

      {/* Three-pillar typographic catalog — no badge boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border-subtle">
        {techPillars.map((pillar, index) => (
          <div
            key={pillar.id}
            className={`p-8 sm:p-10 space-y-6 ${
              index < techPillars.length - 1
                ? 'border-b md:border-b-0 md:border-r border-border-subtle'
                : ''
            }`}
          >
            {/* Pillar index */}
            <span className="font-mono text-xs text-indigo-accent uppercase tracking-widest">
              0{index + 1}
            </span>

            {/* Pillar label */}
            <h3 className="font-heading text-lg font-bold text-ink leading-snug tracking-tight">
              {pillar.label}
            </h3>

            {/* Items — clean text list, no badges */}
            <ul className="space-y-3" role="list">
              {pillar.items.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 font-body text-sm text-ink-muted"
                >
                  <span className="w-1 h-1 rounded-full bg-border-subtle shrink-0 mt-2" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Zero-bloat philosophy — inline footnote, not a banner */}
      <p className="mt-8 font-mono text-xs text-ink-subtle border-t border-border-subtle pt-6">
        Clean web standards and strict TypeScript over heavy component suites. Every tool is backed by
        day-to-day production proficiency. — Zero Bloat · Edge Optimised
      </p>
    </section>
  );
};
