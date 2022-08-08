import React from 'react';
import { Colors, Tint } from '../colors';
import { Percents, Pixels, REMs, TagName } from '../types';
import { BorderProps, ColorProps, Hoverable, MarginProps, PaddingProps } from './types';
export declare type JustifyContent = 'space-between' | 'center';
interface _Props {
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    borderRadius?: boolean;
    children: React.ReactNode;
    cursor?: 'pointer';
    display?: 'flex';
    flexDirection?: 'column' | 'row';
    href?: string;
    id?: string;
    justifyContent?: JustifyContent;
    listStyleType?: 'none';
    tagName?: TagName;
    textAlign?: 'left' | 'right';
    textColor?: Colors;
    textColorTint?: Tint;
    textDecoration?: 'underline';
    verticalAlign?: 'top';
    width?: Pixels | REMs | Percents;
}
declare type ButtonOnlyProps = {
    type?: 'reset' | 'button' | 'submit';
};
declare type HTMLTypes = Pick<React.ButtonHTMLAttributes<HTMLElement>, 'onClick'>;
declare type Props = _Props & BorderProps & PaddingProps & MarginProps & ButtonOnlyProps & Hoverable<ColorProps> & HTMLTypes;
export declare const Block: React.FunctionComponent<Props>;
export {};
