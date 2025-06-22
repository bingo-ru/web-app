import { BadgeProps } from './props';

export function Badge({ children }: BadgeProps) {
  return (
    <span class="inline-flex items-center justify-center p-1.5 rounded-lg">
      {children}
    </span>
  );
}
