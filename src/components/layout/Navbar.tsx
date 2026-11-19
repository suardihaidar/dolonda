import React, { useState, useEffect } from 'react';
import { navigationLinks } from '../../data/navigation';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-canvas/90 backdrop-blur-md border-b border-border-subtle shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-container mx-auto px-6 sm:px-8 md:px-12 h-20 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-accent rounded-sm py-1"
            aria-label="Dolonda — Home"
          >
            <span className="font-heading text-2xl font-bold tracking-tight text-ink group-hover:text-ink/80 transition-colors">
              Dolonda
            </span>
            <span className="w-2 h-2 rounded-full bg-lime-accent inline-block transform group-hover:scale-125 transition-transform duration-200" />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main Navigation"
          >
            {navigationLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-muted hover:text-ink transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-accent rounded-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-xs font-mono font-medium uppercase tracking-wider px-5 py-2.5 rounded-full bg-ink text-canvas hover:bg-ink/85 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent hover:-translate-y-0.5 active:translate-y-0"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2.5 rounded-lg text-ink hover:bg-canvas-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-accent"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center">
              <span
                className={`w-6 h-0.5 bg-ink transition-transform duration-200 ease-in-out ${
                  isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-ink transition-opacity duration-200 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-ink transition-transform duration-200 ease-in-out ${
                  isMobileMenuOpen ? '-translate-y-2.5 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Accessible Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={navigationLinks}
      />
    </>
  );
};
