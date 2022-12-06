import { ChildrenOnlyProps } from './atoms/util';

export type ChildrenOnlyComponent = React.FunctionComponent<ChildrenOnlyProps>;

export type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function doNothing() {}
