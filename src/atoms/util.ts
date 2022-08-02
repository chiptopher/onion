import React from 'react';

export type Mapping<T extends string, R = string> = {
    [K in T]: R;
};

export interface ChildrenOnlyProps {
    children?: React.ReactNode;
}

export type Appended<Type, AppendedText extends string> = {
    [Property in keyof Type as `${string &
        Property}${AppendedText}`]: Type[Property];
};
