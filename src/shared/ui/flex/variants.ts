import { cva } from 'class-variance-authority';

export const flexVariants = cva('flex w-full', {
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
    },
    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'start',
    justify: 'start',
    wrap: false,
  },
});
