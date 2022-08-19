import React from 'react';
import { Colors, Tint } from '../../atoms/colors';
import { Block } from '../../atoms/spacing';
import { TagName } from '../../atoms/types';
export interface TextProps {
    children: React.ReactNode;
    color?: Colors;
    colorTint?: Tint;
    marginBottom?: Block;
    style: 'title' | 'header' | 'subheader' | 'body' | 'label' | 'caption' | 'larger-body';
    tagName: TagName;
    underlined?: boolean;
}
export declare const Text2: React.FunctionComponent<TextProps>;
