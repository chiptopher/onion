import React from 'react';
import { Colors, Tint } from '../colors';
import { TagName } from '../types';
import { BorderProps, MarginProps, PaddingProps } from './types';
export declare type JustifyContent = 'space-between' | 'center';
interface _Props {
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    borderRadius?: boolean;
    children: React.ReactNode;
    color?: Colors;
    colorTint?: Tint;
    display?: 'flex';
    flexDirection?: 'column' | 'row';
    justifyContent?: JustifyContent;
    tagName?: TagName;
}
declare type Props = _Props & BorderProps & PaddingProps & MarginProps;
export declare const Block: React.FunctionComponent<Props>;
export {};
