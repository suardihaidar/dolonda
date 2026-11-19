import React from 'react';
import { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group bg-canvas-card border border-border-subtle rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:border-ink/40 hover:shadow-md hover:-translate-y-1">
      <div className="space-y-6">
        {/* Top Header: Number & Category Accent */}
        <div className="flex items-center justify-between pb-4 border-b border-border-subtle/70">
          <span className="font-mono text-sm font-semibold text-indigo-accent tracking-widest">
            {service.number}
          </span>
          <span className="w-2 h-2 rounded-full bg-border-subtle group-hover:bg-lime-accent transition-colors duration-200" />
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl font-bold text-ink tracking-tight group-hover:text-ink/90 transition-colors">
          {service.title}
        </h3>

        {/* Narrative Description */}
        <p className="font-body text-sm sm:text-base text-ink-muted leading-relaxed">
          {service.description}
        </p>

        {/* Capabilities Breakdown */}
        <div className="pt-2 space-y-2.5">
          <p className="font-mono text-xs uppercase tracking-wider text-ink-subtle">
            Deliverables & Focus:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm font-body text-ink">
            {service.capabilities.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-indigo-accent font-mono font-bold mt-0.5">
                  ✓
                </span>
                <span className="text-ink-muted group-hover:text-ink transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="pt-8 mt-6 border-t border-border-subtle/70">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-xs font-mono font-medium text-ink hover:text-indigo-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-accent rounded-sm"
        >
          <span>Discuss {service.title}</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
};
