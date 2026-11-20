import React from 'react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle"
      aria-label="About Suardi & Dolonda"
    >
      {/* Section label */}
      <span className="font-mono text-xs text-ink-subtle uppercase tracking-widest block mb-16">
        03 / About
      </span>

      {/* Two-column essay spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left — Pull quote at editorial scale */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-10">
          <blockquote className="space-y-6">
            <p className="font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-ink leading-tight tracking-tight">
              "Clean code is invisible. What remains is how effortless, responsive,
              and trustworthy the interface feels."
            </p>
            <footer className="font-mono text-xs text-ink-subtle">
              — Suardi, Founder of Dolonda
            </footer>
          </blockquote>

          {/* Minimal signature timeline */}
          <div className="space-y-0 border-t border-border-subtle pt-8">
            <p className="font-mono text-xs text-ink-subtle uppercase tracking-widest mb-4">
              Background
            </p>
            <div className="divide-y divide-border-subtle">
              {[
                { label: 'Experience', value: '> 7 Years Professional Engineering' },
                { label: 'Specialisation', value: 'React · TypeScript · Responsive UI' },
                { label: 'Location', value: 'Indonesia · Remote Worldwide' },
                { label: 'Languages', value: 'English & Indonesian' },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-baseline py-3 gap-4">
                  <span className="font-mono text-xs text-ink-subtle shrink-0">{label}</span>
                  <span className="font-body text-sm text-ink font-medium text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Founder essay narrative */}
        <div className="lg:col-span-7 space-y-6 font-body text-base text-ink-muted leading-relaxed">
          <p>
            I'm Suardi — a software engineer turned independent creative developer, working from
            Indonesia under the name <span className="text-ink font-medium">Dolonda</span>. After more
            than seven years writing production software, I returned to what drew me to this discipline
            in the first place: the intersection of engineering rigour and thoughtful visual craft.
          </p>
          <p>
            Most frontend work either leans too far into decorative excess — effects for their own sake,
            templates, component bloat — or it leans too far into pure utility, leaving interfaces that
            work but feel cold. I build in the space between: websites and applications that are
            technically sound, visually purposeful, and genuinely pleasant to use.
          </p>
          <p>
            I work directly with founders, product teams, and agencies who need a trusted senior
            engineer at the frontend layer. No handoffs to juniors. No subcontracting. You get clear
            communication, precise implementation, and code you can own and extend independently.
          </p>

          {/* Principles — prose sentences, not nested cards */}
          <div className="pt-4 border-t border-border-subtle space-y-4">
            <p className="font-mono text-xs text-ink-subtle uppercase tracking-widest">
              Working Principles
            </p>
            <p>
              <span className="font-heading text-sm font-bold text-ink">Rigour over speed.</span>{' '}
              Strict TypeScript, semantic HTML, and zero unnecessary dependencies are non-negotiable
              from the first line of code.
            </p>
            <p>
              <span className="font-heading text-sm font-bold text-ink">Fidelity to design intent.</span>{' '}
              Figma-to-code translation is a craft in itself. Spacing, weight, rhythm, and responsive
              behaviour all matter at the detail level.
            </p>
            <p>
              <span className="font-heading text-sm font-bold text-ink">Direct, honest partnership.</span>{' '}
              I challenge weak decisions rather than passively executing them. Clear feedback in both
              directions produces better work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
