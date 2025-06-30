import { mergeRefs } from '../../libs/merge-refs';
import { InputProps } from './props';

const Input = ({
  iconBefore,
  iconAfter,
  ref,
  ...props
}: InputProps) => {
  let inputRef: HTMLInputElement | undefined;

  return (
    <div
      class="flex p-3.5 bg-gray-100 text-black placeholder:text-gray-400 gap-[7px] items-center rounded-2xl"
      onClick={() => inputRef?.focus()}
    >
      {iconBefore}
      <input {...props} ref={mergeRefs(inputRef, ref)} />
      {iconAfter}
    </div>
  );
};

export default Input;
