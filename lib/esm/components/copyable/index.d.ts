import React from 'react';
import { ChildrenOnlyProps } from '../../atoms/util';
import { CopyableActionProps } from './action';
export declare const CopyableContext: React.Context<{
    copied: boolean;
    setCopied: (value: boolean) => void;
}>;
export declare const Copyable: React.FunctionComponent<ChildrenOnlyProps> & {
    Action: React.FunctionComponent<CopyableActionProps>;
    Content: React.FunctionComponent<CopyableContentProps>;
};
interface CopyableContentProps {
    children: string | number;
}
export {};
