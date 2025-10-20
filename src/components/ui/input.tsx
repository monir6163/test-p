import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

// Premium glass input variant
const GlassInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-lg border border-gray-200 bg-white/40 backdrop-blur-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400/20 focus-visible:ring-offset-2 focus-visible:bg-white/50 focus-visible:border-gray-400/30 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 shadow-sm dark:border-white/15 dark:bg-white/10 dark:focus-visible:ring-ring/30 dark:focus-visible:bg-white/15 dark:focus-visible:border-white/25',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
GlassInput.displayName = 'GlassInput';

export { GlassInput, Input };
