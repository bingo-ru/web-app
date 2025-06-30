import { cva } from 'class-variance-authority';

const IconVariants = cva('inline-block bg-no-repeat', {
  variants: {
    size: {
      sm: 'w-4 h-4',
      md: 'w-4.5 h-4.5',
      lg: 'w-6 h-6',
      logo: 'w-11 h-11',
    },
    stroke: {
      gray: 'bg-gray-400',
      primary: 'bg-primary',
      white: 'bg-gray-0',
    },
  },
  defaultVariants: {
    size: 'sm',
    stroke: 'white',
  },
});

export { IconVariants };
