import React from 'react';
import { ChildrenOnlyProps } from '../../atoms/util';
export declare const Copyable: React.FunctionComponent<ChildrenOnlyProps> & {
    Action: React.FunctionComponent;
    Content: React.FunctionComponent<CopyableContentProps>;
};
interface CopyableContentProps {
    children: string | number;
}
export {};
