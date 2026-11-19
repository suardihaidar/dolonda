import React from 'react';
import { services } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from '../ui/ServiceCard';

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle"
      aria-label="Services and Core Offerings"
    >
      <div className="space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            label="02 / Services"
            title="Focused Capabilities"
            description="Clear, dependable frontend engineering and responsive website development tailored for ambitious businesses and founders."
          />
          <div className="hidden md:block text-right">
            <span className="font-mono text-xs text-ink-subtle">
              Direct Collaboration · No Subcontracting
            </span>
          </div>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>

        {/* Tailored Scope Banner */}
        <div className="p-8 rounded-3xl bg-canvas-card border border-border-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="font-heading text-lg font-bold text-ink">
              Have a unique frontend challenge or custom design to implement?
            </h4>
            <p className="font-body text-sm text-ink-muted leading-relaxed">
              Whether you need a standalone landing page, a React application from a Figma file, or focused UI bug triage, you collaborate directly with Suardi.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 text-xs font-mono font-medium uppercase tracking-wider px-6 py-3 rounded-full bg-ink text-canvas hover:bg-ink/85 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent hover:-translate-y-0.5"
          >
            Inquire About a Project →
          </a>
        </div>
      </div>
    </section>
  );
};
