import React from 'react';
import { TechItem } from '../../types';

interface TechBadgeProps {
  tech: TechItem;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
  return (
    <div className="group bg-canvas-card border border-border-subtle rounded-2xl p-4 sm:p-5 flex items-center justify-between transition-all duration-200 hover:border-ink hover:-translate-y-0.5">
      <div className="space-y-1">
        <span className="font-heading text-base sm:text-lg font-bold text-ink">
          {tech.name}
        </span>
      </div>

      {tech.highlight && (
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink bg-lime-accent px-2 py-0.5 rounded-full font-semibold">
          Core
        </span>
      )}
    </div>
  );
};
