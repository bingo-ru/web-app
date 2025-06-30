import { VariantProps } from 'class-variance-authority';

import { flexVariants } from './variants';
import { JSX } from 'solid-js';

export interface FlexProps
  extends JSX.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {
  asParent?: boolean;
}
