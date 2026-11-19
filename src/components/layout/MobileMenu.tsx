import React, { useEffect, useRef } from 'react';
import { NavItem } from '../../types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, items }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 md:hidden flex flex-col"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer content */}
      <div
        ref={menuRef}
        className="relative z-10 w-full bg-canvas border-b border-border-subtle p-6 pt-24 shadow-xl flex flex-col gap-6 animate-in slide-in-from-top duration-200"
      >
        <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation Links">
          {items.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between text-2xl font-heading font-medium text-ink hover:text-indigo-accent py-2 border-b border-border-subtle/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-accent rounded-sm"
            >
              <span>{item.label}</span>
              <span className="font-mono text-xs text-ink-subtle">
                0{index + 1}
              </span>
            </a>
          ))}
        </nav>

        <div className="pt-4 flex flex-col gap-3">
          <a
            href="#contact"
            onClick={onClose}
            className="w-full text-center py-3.5 px-6 rounded-full bg-ink text-canvas font-medium text-sm hover:bg-ink/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-accent"
          >
            Let's Talk
          </a>
          <p className="font-mono text-xs text-center text-ink-subtle pt-2">
            Independent Creative Developer · Suardi
          </p>
        </div>
      </div>
    </div>
  );
};
