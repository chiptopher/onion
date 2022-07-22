import React from 'react';
import { Heirarcy } from './header-shared';
import { TextProps } from './text';
interface SubheaderProps {
    heirarchy: Heirarcy;
}
declare type Props = Omit<TextProps, 'tagName' | 'style'> & SubheaderProps;
export declare const Subheader: React.FunctionComponent<Props>;
export {};
