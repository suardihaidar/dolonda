import React from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`space-y-3 ${
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'
      } ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-indigo-accent font-semibold">
          {label}
        </span>
        <span className="h-px w-8 bg-indigo-accent/30 inline-block" />
      </div>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-tight">
        {title}
      </h2>
      {description && (
        <p className="font-body text-ink-muted text-base sm:text-lg leading-relaxed pt-1">
          {description}
        </p>
      )}
    </div>
  );
};
