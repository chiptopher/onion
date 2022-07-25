import React from 'react';
import { Colors, Tint } from '../colors';
import { TagName } from '../types';
import { BlockSpacing } from './util';
export declare type JustifyContent = 'space-between' | 'center';
interface Props {
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    borderRadius?: boolean;
    children: React.ReactNode;
    color?: Colors;
    colorTint?: Tint;
    display?: 'flex';
    flexDirection?: 'column' | 'row';
    justifyContent?: JustifyContent;
    margin?: BlockSpacing;
    marginBottom?: BlockSpacing;
    marginLeft?: BlockSpacing;
    marginRight?: BlockSpacing;
    marginTop?: BlockSpacing;
    padding?: BlockSpacing;
    paddingBottom?: BlockSpacing;
    paddingLeft?: BlockSpacing;
    paddingRight?: BlockSpacing;
    paddingTop?: BlockSpacing;
    tagName?: TagName;
}
export declare const Block: React.FunctionComponent<Props>;
export {};
