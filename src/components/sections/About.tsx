import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle"
      aria-label="About Suardi and Dolonda"
    >
      <div className="space-y-16">
        {/* Section Header */}
        <SectionHeading
          label="03 / About"
          title="The Developer Behind Dolonda"
          description="A founder-led practice dedicated to building thoughtful, high-performance web experiences."
        />

        {/* Content Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Values (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 font-body text-ink text-base sm:text-lg leading-relaxed">
              <p className="font-heading text-xl sm:text-2xl font-semibold text-ink leading-snug">
                I'm <span className="text-ink">Suardi</span> (often called <span className="text-ink">Ardi</span>), an independent creative developer with more than seven years of professional software engineering experience.
              </p>
              <p className="text-ink-muted">
                My background is grounded in modern frontend development, with deep hands-on experience in <strong className="text-ink font-medium">React</strong>, <strong className="text-ink font-medium">TypeScript</strong>, and <strong className="text-ink font-medium">React Native</strong>. Over the years, I've seen firsthand how easily great design concepts can get lost in translation when handed off to generic implementation.
              </p>
              <p className="text-ink-muted">
                I founded <strong className="text-ink font-medium">Dolonda</strong> to bridge that divide. My mission is simple: partner directly with founders, ambitious businesses, and creative agencies to build responsive, robust, and thoughtfully designed digital products that perform as well as they look.
              </p>
            </div>

            {/* Core Operating Principles */}
            <div className="pt-4 space-y-4">
              <p className="font-mono text-xs uppercase tracking-widest text-indigo-accent font-semibold">
                Guiding Principles
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div className="p-4 rounded-2xl bg-canvas-card border border-border-subtle space-y-1.5">
                  <span className="font-mono text-xs font-bold text-ink">01 / Rigor</span>
                  <p className="font-heading text-sm font-semibold text-ink">Clean Architecture</p>
                  <p className="font-body text-xs text-ink-muted">
                    Strict TypeScript, semantic HTML, and zero unnecessary dependencies.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-canvas-card border border-border-subtle space-y-1.5">
                  <span className="font-mono text-xs font-bold text-ink">02 / Craft</span>
                  <p className="font-heading text-sm font-semibold text-ink">Design Fidelity</p>
                  <p className="font-body text-xs text-ink-muted">
                    Exact Figma-to-code translation with fluid responsiveness across devices.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-canvas-card border border-border-subtle space-y-1.5">
                  <span className="font-mono text-xs font-bold text-ink">03 / Clarity</span>
                  <p className="font-heading text-sm font-semibold text-ink">Direct Partnership</p>
                  <p className="font-body text-xs text-ink-muted">
                    You collaborate directly with the engineer writing the code.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Profile & Pull Quote (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Editorial Founder Monogram Card */}
            <div className="p-8 rounded-3xl bg-canvas-card border border-border-subtle space-y-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-ink text-canvas font-heading font-bold text-lg flex items-center justify-center">
                    S<span className="text-lime-accent">.</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-ink">Suardi</h3>
                    <p className="font-mono text-xs text-ink-subtle">Founder · Creative Developer</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-indigo-accent bg-canvas px-2.5 py-1 rounded-full border border-border-subtle">
                  Dolonda
                </span>
              </div>

              {/* Verified Career Metrics / Summary */}
              <div className="space-y-3 text-xs font-body">
                <div className="flex justify-between py-1.5 border-b border-border-subtle/60">
                  <span className="font-mono text-ink-subtle">Experience</span>
                  <span className="font-medium text-ink">&gt; 7 Years Professional Engineering</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border-subtle/60">
                  <span className="font-mono text-ink-subtle">Primary Specialization</span>
                  <span className="font-medium text-ink">React, TypeScript & Responsive UI</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border-subtle/60">
                  <span className="font-mono text-ink-subtle">Location & Reach</span>
                  <span className="font-medium text-ink">Indonesia · Remote Worldwide</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="font-mono text-ink-subtle">Language Support</span>
                  <span className="font-medium text-ink">English & Indonesian</span>
                </div>
              </div>

              {/* Authentic Pull Quote */}
              <blockquote className="pt-2 border-t border-border-subtle">
                <p className="font-body italic text-sm text-ink-muted leading-relaxed">
                  "Thoughtful digital experiences aren't born from excessive effects. They emerge when clean engineering, solid typography, and honest problem-solving come together."
                </p>
                <footer className="font-mono text-xs text-ink pt-2 font-medium">
                  — Suardi, Dolonda
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
