import { cva } from 'class-variance-authority';

export const textVariants = cva('-tracking-[5%]', {
  variants: {
    size: {
      xs: 'text-xs leading-[100%] font-medium',
      sm: 'text-sm leading-[100%] font-normal',
      base: 'text-base leading-[100%] font-medium',
      lg: 'text-lg leading-[100%] font-medium',
      xl: 'text-xl leading-[120%] font-medium',
      '2xl': 'text-2xl leading-[100%] font-semibold',
      '5xl': 'text-5xl leading-[84%] font-bold',
    },
    color: {
      primary: 'text-gradient w-fit',
      secondary: 'text-black',
      gray: 'text-gray-400',
    },
  },
  defaultVariants: {
    size: 'base',
    color: 'secondary',
  },
});
