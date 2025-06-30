import { VariantProps } from 'class-variance-authority';
import { JSX } from 'solid-js/h/jsx-runtime';
import { textVariants } from './variants';

export type TextHTMLElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span';

export type HTMLProps<T extends TextHTMLElement> = Omit<
  JSX.IntrinsicElements[T],
  'color' | 'class'
>;

type TextElementProps<T extends TextHTMLElement> = HTMLProps<T> & {
  as?: T;
  class?: string;
};

export type TextProps<T extends TextHTMLElement = 'span'> =
  VariantProps<typeof textVariants> & TextElementProps<T>;
