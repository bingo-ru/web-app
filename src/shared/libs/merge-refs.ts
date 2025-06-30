import { Ref } from 'solid-js';

/**
 * Utility for chaining multiple `ref` assignments with `props.ref` forwarding.
 * @param refs list of ref setters. Can be a `props.ref` prop for ref forwarding or a setter to a local variable (`el => ref = el`).
 * @example
 * ```tsx
 * interface ButtonProps {
 *    ref?: Ref<HTMLButtonElement>
 * }
 * function Button (props: ButtonProps) {
 *    let ref: HTMLButtonElement | undefined
 *    onMount(() => {
 *        // use the local ref
 *    })
 *    return <button ref={mergeRefs(props.ref, el => ref = el)} />
 * }
 *
 * // in consumer's component:
 * let ref: HTMLButtonElement | undefined
 * <Button ref={ref} />
 * ```
 */
export function mergeRefs<T>(
  ...refs: (Ref<T> | undefined)[]
): (el: T) => void {
  return chain(refs as ((el: T) => void)[]);
}

function chain<T>(fns: ((el: T) => void)[]): (el: T) => void {
  return (el: T) => fns.forEach((fn) => fn(el));
}
