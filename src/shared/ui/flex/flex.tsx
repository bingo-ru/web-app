import { cn } from '../../libs/cn';
import { FlexProps } from './props';
import { flexVariants } from './variants';

const Flex = ({
  align,
  justify,
  direction,
  wrap,
  ...props
}: FlexProps) => {
  return (
    <div
      {...props}
      class={cn(
        flexVariants({
          align,
          justify,
          direction,
          wrap,
          class: props.class,
        }),
      )}
    />
  );
};

export default Flex;
