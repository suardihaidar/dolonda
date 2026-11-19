import React from 'react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-12 sm:pt-20 md:pt-28 pb-20 sm:pb-28 md:pb-36 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full overflow-hidden"
      aria-label="Introduction & Overview"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-16">
        {/* Left Column: Primary Copy & Actions */}
        <div className="max-w-3xl space-y-8">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-canvas-card border border-border-subtle shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-accent"></span>
            </span>
            <span className="font-mono text-xs text-ink-muted uppercase tracking-wider font-medium">
              Available for projects · Worldwide remote
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold tracking-tight text-ink leading-[1.08]">
            Building thoughtful digital experiences<span className="text-lime-accent">.</span>
          </h1>

          {/* Supporting Statement */}
          <p className="font-body text-ink-muted text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl font-normal">
            I'm <span className="text-ink font-medium">Suardi</span>, an independent creative developer with more than seven years of professional software engineering experience. I help businesses turn ideas into responsive websites and intuitive web applications.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              href="#work"
              variant="primary"
              size="lg"
              icon={
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              }
            >
              Explore My Work
            </Button>

            <Button
              href="#contact"
              variant="secondary"
              size="lg"
            >
              Let's Talk
            </Button>
          </div>
        </div>

        {/* Right Column: Editorial Architecture Note / Focus Highlights */}
        <div className="lg:w-80 shrink-0 border-t lg:border-t-0 lg:border-l border-border-subtle pt-8 lg:pt-0 lg:pl-10 space-y-6">
          <div className="space-y-1">
            <p className="font-mono text-xs uppercase tracking-widest text-indigo-accent font-semibold">
              Approach
            </p>
            <h2 className="font-heading text-lg font-bold text-ink">
              Craft Meets Engineering
            </h2>
            <p className="font-body text-xs text-ink-muted leading-relaxed">
              Every interface is built with deliberate typography, responsive precision, and maintainable, clean code.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between text-xs py-1.5 border-b border-border-subtle/60">
              <span className="font-mono text-ink-subtle">Core Focus</span>
              <span className="font-medium text-ink">Frontend Engineering</span>
            </div>
            <div className="flex items-center justify-between text-xs py-1.5 border-b border-border-subtle/60">
              <span className="font-mono text-ink-subtle">Primary Stack</span>
              <span className="font-medium text-ink">React · TS · Tailwind</span>
            </div>
            <div className="flex items-center justify-between text-xs py-1.5 border-b border-border-subtle/60">
              <span className="font-mono text-ink-subtle">Design Translation</span>
              <span className="font-medium text-ink">Figma to Production</span>
            </div>
            <div className="flex items-center justify-between text-xs py-1.5">
              <span className="font-mono text-ink-subtle">Experience</span>
              <span className="font-medium text-ink">&gt; 7 Years</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
