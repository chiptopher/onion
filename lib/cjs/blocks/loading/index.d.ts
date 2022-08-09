import React from 'react';
import { ChildrenOnlyProps } from '../../atoms/util';
interface Props {
    children?: React.ReactNode;
    initialState?: boolean;
}
export declare const Loading: React.FunctionComponent<Props> & {
    Spinner: React.FunctionComponent<ChildrenOnlyProps>;
    Text: React.FunctionComponent<ChildrenOnlyProps>;
};
export declare function withLoading(Component: any): (props: any) => JSX.Element;
export {};
