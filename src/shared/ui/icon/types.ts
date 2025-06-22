import { JSX } from 'solid-js/jsx-runtime';
import { VariantProps } from 'class-variance-authority';
import { IconVariants } from './variants';

export type Glyph = 'home' | 'logo' | 'search' | 'profile';

export interface IconProps
  extends JSX.HTMLAttributes<HTMLElement>,
    VariantProps<typeof IconVariants> {
  glyph: Glyph;
}
