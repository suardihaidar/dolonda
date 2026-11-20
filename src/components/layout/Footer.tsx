import React from 'react';
import { navigationLinks } from '../../data/navigation';
import { contactDetails } from '../../data/contact';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-canvas border-t border-border-subtle pt-16 sm:pt-20 pb-12 px-6 sm:px-8 md:px-12">
      <div className="max-w-container mx-auto w-full space-y-12 sm:space-y-16">
        {/* Upper Footer: Wordmark, Statement, and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          {/* Brand Wordmark & Mission */}
          <div className="space-y-4 max-w-md">
            <a
              href="#home"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-accent rounded-sm py-1"
              aria-label="Dolonda — Return to Top"
            >
              <span className="font-heading text-3xl font-bold tracking-tight text-ink group-hover:text-ink/80 transition-colors">
                Dolonda
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-lime-accent inline-block transform group-hover:scale-125 transition-transform duration-200" />
            </a>
            <p className="font-body text-sm sm:text-base text-ink-muted leading-relaxed">
              Building thoughtful digital experiences. Founder-led creative development by Suardi.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <nav className="flex flex-wrap gap-6" aria-label="Footer Navigation">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-xs sm:text-sm font-medium text-ink-muted hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-accent rounded-sm py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Back to Top Trigger */}
            <a
              href="#home"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-subtle hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-accent rounded-sm py-1"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <span className="font-bold">↑</span>
            </a>
          </div>
        </div>

        {/* Lower Footer: Social Links, Disclaimer & Copyright */}
        <div className="pt-8 border-t border-border-subtle/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-ink-subtle">
          <div className="flex items-center gap-6">
            <span>Connect:</span>
            <a
              href={contactDetails.githubPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-accent rounded-sm"
            >
              GitHub ↗
            </a>
            <a
              href={contactDetails.linkedinPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-accent rounded-sm"
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${contactDetails.email}`}
              className="hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-accent rounded-sm"
            >
              Email ↗
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <span>Designed & Built with React, TypeScript & Tailwind</span>
            <span>© 2026 Dolonda. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
