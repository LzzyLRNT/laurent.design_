import { type ReactNode } from 'react';
import { useReveal } from '../lib/hooks';

interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

export function Reveal({ children, className = '', variant = 'up', delay = 0, as = 'div' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const baseClass =
    variant === 'left' ? 'reveal-left' : variant === 'right' ? 'reveal-right' : variant === 'scale' ? 'reveal-scale' : 'reveal';

  const Tag = as as 'div';

  return (
    <Tag
      ref={ref}
      className={`${baseClass} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

export function Stagger({ children, className = '' }: StaggerProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`stagger ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
