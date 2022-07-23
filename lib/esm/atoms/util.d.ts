import React from 'react';
export declare type Mapping<T extends string, R = string> = {
    [K in T]: R;
};
export interface ChildrenOnlyProps {
    children?: React.ReactNode;
}
