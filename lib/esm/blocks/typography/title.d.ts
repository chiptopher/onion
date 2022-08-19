import React from 'react';
import { Heirarcy } from './header-shared';
import { TextProps } from './text';
interface TitleProps {
    children: React.ReactNode;
    heirarchy: Heirarcy;
}
declare type Props = Omit<TextProps, 'tagName' | 'style'> & TitleProps;
export declare const Title: React.FunctionComponent<Props>;
export {};
