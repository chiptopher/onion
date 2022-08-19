import React from 'react';
import { TextProps } from './text';
declare type Props = Pick<React.LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'>;
export declare const Label: React.FunctionComponent<Omit<TextProps, 'tagName' | 'style'> & Props>;
export {};
