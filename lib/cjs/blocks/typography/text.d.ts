import React from 'react';
import { Colors } from '../../atoms/colors';
import { Block } from '../../atoms/spacing';
import { TagName } from '../../atoms/types';
export interface TextProps {
    children: React.ReactNode;
    color?: Colors;
    marginBottom?: Block;
    style: 'title' | 'header' | 'subheader' | 'body' | 'label' | 'caption';
    tagName: TagName;
    underlined?: boolean;
}
export declare const Text2: React.FunctionComponent<TextProps>;
