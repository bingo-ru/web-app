import { cn } from '../../libs/cn';
import { mergeRefs } from '../../libs/merge-refs';
import { InputProps } from './props';

const Input = ({
  iconBefore,
  iconAfter,
  ref,
  ...props
}: InputProps) => {
  let inputRef: HTMLInputElement | undefined;

  const handleClick = () => {
    console.log(inputRef);
    inputRef?.focus();
  };
  return (
    <div
      class={cn(
        'flex p-3.5 bg-gray-100 text-black gap-[7px] items-center rounded-2xl w-full cursor-text hover:bg-gray-200 active:bg-gray-100 transition-colors duration-100',
        props.class,
      )}
      onClick={handleClick}
    >
      {iconBefore}
      <input
        {...props}
        class="placeholder:text-gray-400 w-full font-medium text-lg leading-5.5 outline-none bg-transparent placeholder:select-none"
        ref={mergeRefs(ref, (el) => (inputRef = el))}
      />
      {iconAfter}
    </div>
  );
};

export default Input;
