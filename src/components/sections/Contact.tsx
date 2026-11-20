import React, { useState } from 'react';
import { contactDetails } from '../../data/contact';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactDetails.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
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
      <div className="space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            label="05 / Contact"
            title="Let's Build Something Thoughtful"
            description="Have an upcoming website project, need reliable frontend collaboration, or want to refine an existing interface? Let's discuss your timeline and goals."
          />
          <div className="hidden md:block text-right font-mono text-xs text-ink-subtle">
            Direct Founder Communication
          </div>
        </div>

        {/* High-Impact Charcoal Editorial Card (Clean Architecture, No Blurry Glow Blobs) */}
        <div className="bg-ink text-canvas rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-xl space-y-12">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            {/* Left: Email Headline & Direct Copy */}
            <div className="space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-lime-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" />
                <span>Open for Q1/Q2 Engagements · Remote Worldwide</span>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-canvas leading-tight">
                Send an email or message to start the conversation<span className="text-lime-accent">.</span>
              </h3>

              <p className="font-body text-zinc-300 text-base sm:text-lg leading-relaxed">
                Whether you have a finalized Figma design ready for production or an early concept to map out, drop a line. All inquiries are reviewed directly by Suardi with replies within 24 business hours.
              </p>

              {/* Email Address & Copy Trigger */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-lime-accent hover:underline decoration-lime-accent/50 underline-offset-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent rounded-sm"
                >
                  {contactDetails.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-canvas text-xs font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent cursor-pointer"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <span className="text-lime-accent font-bold">✓</span>
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-3.5 h-3.5 text-zinc-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right: Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 shrink-0">
              <Button
                href={`mailto:${contactDetails.email}`}
                variant="lime"
                size="md"
                className="w-full justify-center"
              >
                Send Email Directly
              </Button>

              <Button
                href={contactDetails.whatsappPlaceholder}
                isExternal
                variant="secondary-dark"
                size="md"
                className="w-full justify-center"
                icon={
                  <svg
                    className="w-4 h-4 text-canvas"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                }
              >
                WhatsApp Chat
              </Button>
            </div>
          </div>

          {/* Channels & Timezone Coordinates */}
          <div className="relative z-10 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-6">
              <span className="text-zinc-500">Profiles:</span>
              <a
                href={contactDetails.githubPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-canvas transition-colors underline-offset-4 hover:underline"
              >
                GitHub ↗
              </a>
              <a
                href={contactDetails.linkedinPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-canvas transition-colors underline-offset-4 hover:underline"
              >
                LinkedIn ↗
              </a>
            </div>

            <div className="flex items-center gap-4 text-zinc-500">
              <span>Timezone: UTC+7 (WIB)</span>
              <span>·</span>
              <span>Placeholder links active until confirmed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
