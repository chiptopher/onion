import React from 'react';
import { ChildrenOnlyProps } from '../../atoms/util';
export declare const Loading: React.FunctionComponent<ChildrenOnlyProps> & {
    Spinner: React.FunctionComponent<ChildrenOnlyProps>;
};
export declare function withLoading(Component: any): (props: any) => JSX.Element;
