import { splitProps } from 'solid-js';
import { cn } from '../../libs/cn';
import { TextHTMLElement, TextProps } from './props';
import { textVariants } from './variants';
import { Dynamic } from 'solid-js/web';

export default function Text<T extends TextHTMLElement>(
  props: TextProps<T>,
) {
  const [local, variants, rest] = splitProps(
    props,
    ['as', 'class'],
    ['size', 'color'],
  );

  const classes = () =>
    cn(
      textVariants({
        size: variants.size,
        color: variants.color,
      }),
      local.class,
    );

  const elementProps = {
    ...rest,
    class: classes(),
  };

  return <Dynamic component={local.as} {...elementProps} />;
}
