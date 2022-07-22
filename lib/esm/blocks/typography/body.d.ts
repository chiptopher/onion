import React from 'react';
import { TextProps } from './text';
export declare const Body: React.FunctionComponent<Omit<TextProps, 'tagName' | 'style'> & {
    tagName?: 'p' | 'span';
}>;
