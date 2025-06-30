import { cva } from 'class-variance-authority';

export const buttonVariants = cva('px-3 py-2.5 text-base', {
  variants: {
    variant: {
      primary: 'bg-primary text-black',
      secondary: 'bg-black text-gray-0',
    },
    size: {
      min: 'w-auto rounded-3xl',
      full: 'w-full rounded-2xl',
    },
  },
  defaultVariants: {
    size: 'full',
    variant: 'primary',
  },
});
