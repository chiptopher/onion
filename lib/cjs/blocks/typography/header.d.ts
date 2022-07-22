import React from 'react';
import { Heirarcy } from './header-shared';
import { TextProps } from './text';
export declare const Header: React.FunctionComponent<Omit<TextProps, 'tagName' | 'style'> & {
    heirarchy: Heirarcy;
}>;
