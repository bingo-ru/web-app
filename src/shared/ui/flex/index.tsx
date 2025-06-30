import Flex from './flex';
import { FlexProps } from './props';

type FlexPropsWithoutDirection = Omit<FlexProps, 'direction'>;

export const Row = (props: FlexPropsWithoutDirection) => {
  return <Flex direction="row" {...props} />;
};

export const Column = (props: FlexPropsWithoutDirection) => {
  return <Flex direction="column" {...props} />;
};
