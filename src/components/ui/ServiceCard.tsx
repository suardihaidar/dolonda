import React from 'react';
import { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <article className="group bg-canvas-card border border-border-subtle rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-200 hover:border-ink/40 hover:-translate-y-0.5">
      <div className="space-y-6">
        {/* Monospace Index Number */}
        <div className="flex items-center justify-between pb-4 border-b border-border-subtle/70">
          <span className="font-mono text-sm font-semibold text-indigo-accent tracking-widest">
            {service.number}
          </span>
          <span className="font-mono text-[11px] text-ink-subtle uppercase tracking-wider">
            Service Pillar
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl font-bold text-ink tracking-tight">
          {service.title}
        </h3>

        {/* Problem-Solving Narrative */}
        <p className="font-body text-sm sm:text-base text-ink-muted leading-relaxed">
          {service.description}
        </p>

        {/* Deliverables List (Editorial dashes instead of generic AI checkmarks) */}
        <div className="pt-2 space-y-2.5">
          <p className="font-mono text-xs uppercase tracking-wider text-ink-subtle">
            Deliverables:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm font-body text-ink">
            {service.capabilities.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-ink-subtle font-mono mt-0.5 select-none">—</span>
                <span className="text-ink-muted group-hover:text-ink transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Inquiry Trigger */}
      <div className="pt-8 mt-6 border-t border-border-subtle/70">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-xs font-mono font-medium text-ink hover:text-indigo-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-accent rounded-sm"
        >
          <span>Discuss {service.title}</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </article>
  );
};
