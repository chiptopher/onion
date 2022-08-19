import React from 'react';
import { Heirarcy } from './header-shared';
import { TextProps } from './text';
export declare const Heading: React.FunctionComponent<Omit<TextProps, 'tagName' | 'style'> & {
    heirarchy: Heirarcy;
}>;
