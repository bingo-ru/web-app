import { IconVariants } from './variants';
import { getStyles } from './libs/styles';
import { createMemo } from 'solid-js';
import { IconProps } from './types';

export function Icon({ glyph, size, stroke, ...props }: IconProps) {
  const style = createMemo(() => getStyles(glyph));

  return (
    <i
      {...props}
      class={IconVariants({ size, stroke, className: props.class })}
      style={style()}
    />
  );
}
