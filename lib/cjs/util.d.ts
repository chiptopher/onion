/// <reference types="react" />
import { ChildrenOnlyProps } from './atoms/util';
export declare type ChildrenOnlyComponent = React.FunctionComponent<ChildrenOnlyProps>;
export declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export declare function doNothing(): void;
