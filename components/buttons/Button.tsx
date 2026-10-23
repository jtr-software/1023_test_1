import { cn } from '@/lib/utils';
import React from 'react';

type ElevateButtonProps = React.ComponentPropsWithoutRef<'button'>;

export const PrimaryButton = React.forwardRef<
  HTMLButtonElement,
  ElevateButtonProps
>(({ className, ...props }, ref) => (
  <ElevateButton
    ref={ref}
    className={cn(
      'bg-primary text-primary-foreground',
      'shadow-[0_4px_14px_rgba(184,245,80,0.25)] hover:shadow-[0_8px_28px_rgba(184,245,80,0.5)]',
      className,
    )}
    {...props}
  />
));
