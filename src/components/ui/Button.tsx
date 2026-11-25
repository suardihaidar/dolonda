import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'secondary-dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer select-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 rounded-full gap-1.5',
    md: 'text-sm px-6 py-3 rounded-full gap-2',
    lg: 'text-base px-8 py-3.5 rounded-full gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-ink text-canvas hover:bg-ink/90 hover:-translate-y-0.5 active:translate-y-0 shadow-sm focus-visible:ring-ink focus-visible:ring-offset-canvas',
    secondary:
      'bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-canvas-subtle hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-ink focus-visible:ring-offset-canvas',
    'secondary-dark':
      'bg-transparent text-canvas border border-white/20 hover:border-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-lime-accent focus-visible:ring-offset-ink',
    outline:
      'bg-transparent text-ink border border-border-subtle hover:border-ink hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-ink focus-visible:ring-offset-canvas',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
