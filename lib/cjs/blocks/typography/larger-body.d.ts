import React from 'react';
import { TextProps } from './text';
export declare const LargerBody: React.FunctionComponent<Omit<TextProps, 'tagName' | 'style'> & {
    tagName?: 'p' | 'span';
}>;
