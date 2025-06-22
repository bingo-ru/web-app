import { ButtonProps } from './props';
import { buttonVariants } from './variants';

const Button = ({ variant, size, ...props }: ButtonProps) => (
  <button {...props} class={buttonVariants({ variant, size })} />
);

export default Button;
