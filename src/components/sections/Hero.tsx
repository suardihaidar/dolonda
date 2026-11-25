import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-12 sm:pt-20 md:pt-28 pb-24 sm:pb-32 md:pb-40 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full"
      aria-label="Introduction & Overview"
    >
      {/* Micro-masthead — hairline row of geographic & identity metadata */}
      <div className="mb-12 sm:mb-16 flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-ink-subtle border-b border-border-subtle pb-5">
        <span className="text-ink font-semibold">Suardi</span>
        <span className="text-border-subtle">·</span>
        <span>Indonesia · GMT+7</span>
        <span className="text-border-subtle hidden sm:inline">·</span>
        <span className="hidden sm:inline">Independent Creative Developer</span>
      </div>

      {/* Monumental display headline */}
      <div className="space-y-10 max-w-5xl">
        <h1
          className="font-heading font-bold text-ink leading-[0.95] tracking-[-0.035em] text-[clamp(3.25rem,8vw,7rem)]"
        >
          Building thoughtful{' '}
          <span className="relative inline-block">
            digital
          </span>{' '}
          experiences
        </h1>

        {/* Concise, honest bio */}
        <p className="font-body text-ink-muted text-lg sm:text-xl leading-relaxed max-w-2xl">
          I'm <span className="text-ink font-medium">Suardi</span> — an independent creative developer
          with over seven years of software engineering experience. I build responsive, production-ready
          websites and web applications where clean architecture meets meticulous visual craft.
        </p>

        {/* Single primary CTA + plain-text secondary */}
        <div className="flex flex-wrap items-center gap-6 pt-2">
          <a
            href="#work"
            className="group inline-flex items-center gap-2.5 bg-ink text-canvas font-heading font-bold text-sm px-7 py-4 hover:bg-ink/85 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            View Selected Work
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>

          <a
            href="#contact"
            className="font-body text-sm text-ink-muted underline underline-offset-4 decoration-border-subtle hover:text-ink hover:decoration-ink transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            Let's Talk →
          </a>
        </div>

        {/* Minimal status row */}
        <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm text-ink-subtle">
          <span>Available for new engagements</span>
          <span>Remote · Worldwide</span>
          <span className="text-ink-muted font-medium">React · TypeScript · Tailwind CSS</span>
        </div>
      </div>
    </section>
  );
};
