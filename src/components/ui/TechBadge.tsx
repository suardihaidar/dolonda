import React from 'react';
import { TechItem } from '../../types';

interface TechBadgeProps {
  tech: TechItem;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
  const categoryLabels = {
    core: 'Core Language',
    framework: 'Framework',
    styling: 'Styling & UI',
    tooling: 'Workflow & Build',
  };

  return (
    <div className="group relative bg-canvas-card border border-border-subtle rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:border-ink hover:shadow-xs hover:-translate-y-0.5">
      <div className="flex items-center justify-between gap-2 pb-3">
        <span className="font-mono text-[11px] text-ink-subtle uppercase tracking-wider">
          {categoryLabels[tech.category]}
        </span>
        {tech.highlight && (
          <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" title="Primary Focus" />
        )}
      </div>

      <div className="flex items-center justify-between">
        <span className="font-heading text-lg sm:text-xl font-bold text-ink group-hover:text-ink/90 transition-colors">
          {tech.name}
        </span>
        <span className="font-mono text-xs text-ink-subtle opacity-0 group-hover:opacity-100 transition-opacity">
          →
        </span>
      </div>
    </div>
  );
};
