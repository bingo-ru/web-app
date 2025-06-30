import { JSX } from 'solid-js';

export interface InputProps
  extends JSX.InputHTMLAttributes<HTMLInputElement> {
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
}
