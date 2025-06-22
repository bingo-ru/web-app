import { cva } from 'class-variance-authority';

export const buttonVariants = cva('', {
  variants: {
    variant: {
      primary: 'bg-primary text-black',
      secondary: 'bg-black text-gray-0',
    },
    size: {
      min: 'w-min',
      full: 'w-full',
    },
  },
  defaultVariants: {
    size: 'full',
    variant: 'primary',
  },
});
