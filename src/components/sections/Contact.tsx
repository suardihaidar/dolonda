import React, { useState } from 'react';
import { contactDetails } from '../../data/contact';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactDetails.email);
    } catch {
      // fallback: still show copied feedback
    } finally {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 max-w-container mx-auto w-full border-t border-border-subtle"
      aria-label="Contact and Inquiries"
    >
      {/* Section label */}
      <span className="font-mono text-xs text-ink-subtle uppercase tracking-widest block mb-16">
        05 / Contact
      </span>

      {/* Stark dark anchor — the card IS the section heading */}
      <div className="bg-ink text-canvas p-10 sm:p-14 md:p-20 space-y-12">

        {/* Availability status pill */}
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-lime-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" aria-hidden="true" />
          <span>Open for Q1 / Q2 Engagements · Remote Worldwide</span>
        </div>

        {/* Monumental display headline */}
        <h2 className="font-heading font-bold text-canvas leading-[0.95] tracking-[-0.035em] text-[clamp(2.5rem,6vw,5.5rem)]">
          Let's build something<br className="hidden sm:inline" /> exceptional
          <span className="text-lime-accent" aria-hidden="true">.</span>
        </h2>

        {/* Supporting sentence */}
        <p className="font-body text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl">
          Have an upcoming project, need reliable frontend collaboration, or want to refine an
          existing interface? Start with an email or a WhatsApp message.
        </p>

        {/* Primary contact actions */}
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4">
          {/* Email — click to copy */}
          <button
            onClick={handleCopyEmail}
            className="group inline-flex items-center gap-3 font-heading font-bold text-canvas bg-transparent border border-canvas/20 px-6 py-4 hover:border-canvas/60 hover:bg-canvas/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink text-sm sm:text-base"
            aria-label={copied ? 'Email address copied' : 'Click to copy email address'}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 text-lime-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lime-accent">Copied to clipboard</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 text-zinc-400 group-hover:text-canvas transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {contactDetails.email}
              </>
            )}
          </button>

          {/* WhatsApp */}
          <a
            href={contactDetails.whatsappPlaceholder}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-heading font-bold text-canvas border border-canvas/20 px-6 py-4 hover:border-canvas/60 hover:bg-canvas/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink text-sm sm:text-base"
            aria-label="Message on WhatsApp"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Chat
          </a>
        </div>

        {/* Footer metadata row */}
        <div className="pt-8 border-t border-canvas/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Bandung / Jakarta · UTC+7</span>
            <span>·</span>
            <a
              href={contactDetails.githubPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-canvas transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent"
            >
              GitHub ↗
            </a>
            <a
              href={contactDetails.linkedinPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-canvas transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent"
            >
              LinkedIn ↗
            </a>
          </div>
          <span className="text-zinc-600">Placeholder links · pending confirmation</span>
        </div>
      </div>
    </section>
  );
};
