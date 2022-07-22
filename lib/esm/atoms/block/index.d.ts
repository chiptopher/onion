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
}
export declare const Block: React.FunctionComponent<Props>;
export {};
