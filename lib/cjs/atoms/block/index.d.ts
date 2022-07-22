import React from 'react';
import { Colors } from '../colors';
import { TagName } from '../types';
import { BlockPadding } from './util';
export declare type JustifyContent = 'space-between' | 'center';
interface Props {
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    borderRadius?: boolean;
    children: React.ReactNode;
    color?: Colors;
    display?: 'flex';
    flexDirection?: 'column' | 'row';
    justifyContent?: JustifyContent;
    padding?: BlockPadding;
    tagName?: TagName;
}
export declare const Block: React.FunctionComponent<Props>;
export {};
