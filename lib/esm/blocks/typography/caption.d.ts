import React from 'react';
import { TextProps } from './text';
export declare const Caption: React.FunctionComponent<Omit<TextProps, 'tagName' | 'style'> & {
    tagName?: 'p' | 'span';
}>;
