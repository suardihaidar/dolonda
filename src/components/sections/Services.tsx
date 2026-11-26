import React from 'react';
import { services } from '../../data/services';

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle"
      aria-label="Services and Core Offerings"
    >
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-16">
        <div className="space-y-2">
          <span className="font-mono text-xs text-ink-subtle uppercase tracking-widest">02 / Services</span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-ink tracking-tight leading-tight">
            Focused Capabilities
          </h2>
        </div>
        <p className="font-mono text-xs text-ink-subtle self-end">
          Direct collaboration · No subcontracting
        </p>
      </div>

      {/* Typographic directory — hairline-divided rows, no card boxes */}
      <div className="divide-y divide-border-subtle border-y border-border-subtle">
        {services.map((service) => (
          <div
            key={service.number}
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-12 transition-colors duration-200 hover:bg-canvas-subtle/50"
          >
            {/* Number */}
            <div className="md:col-span-1 flex items-start">
              <span className="font-mono text-xs text-ink-subtle pt-1">{service.number}</span>
            </div>

            {/* Title */}
            <div className="md:col-span-4">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink tracking-tight leading-snug group-hover:text-blue-accent transition-colors duration-200">
                {service.title}
              </h3>
            </div>

            {/* Description */}
            <div className="md:col-span-4">
              <p className="font-body text-sm text-ink-muted leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Deliverable tags */}
            <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-end md:items-start">
              {service.deliverables.map((item) => (
                <span
                  key={item}
                  className="rounded-full font-mono text-[11px] text-ink-subtle border border-border-subtle px-2.5 py-1 leading-none"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer note — inline, not a banner box */}
      <p className="mt-10 font-body text-sm text-ink-muted">
        Have a unique frontend challenge or a Figma file to implement?{' '}
        <a
          href="#contact"
          className="text-ink font-medium underline underline-offset-4 decoration-border-subtle hover:decoration-ink transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm"
        >
          Discuss it directly →
        </a>
      </p>
    </section>
  );
};
