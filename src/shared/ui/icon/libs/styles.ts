import { JSX } from 'solid-js/h/jsx-runtime';
import { Glyph } from '../types';

export const getStyles = (glyph: Glyph): JSX.CSSProperties => ({
  'mask-image': `url(/icons/${glyph}.svg)`,
  'mask-position': 'center center',
  'mask-repeat': 'no-repeat',
});
