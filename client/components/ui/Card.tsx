import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export function Card({ children, className, padding = 'lg' }: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05)] border border-[#E2E8F0]',
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

