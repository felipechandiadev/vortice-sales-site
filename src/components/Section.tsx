import type { CSSProperties, ReactNode } from 'react';

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className="wrap">{children}</div>
    </section>
  );
}

type RevealProps = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function Reveal({ className = '', style, children }: RevealProps) {
  return (
    <div className={`reveal ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
