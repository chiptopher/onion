import React from 'react';
import { Colors } from '../colors';
import { TagName } from '../types';
import { BlockPadding } from './util';
interface Props {
    borderRadius?: boolean;
    children: React.ReactNode;
    color?: Colors;
    padding?: BlockPadding;
    tagName?: TagName;
    display?: 'flex';
    justifyContent?: 'center' | 'space-between';
}
export declare const Block: React.FunctionComponent<Props>;
export {};
