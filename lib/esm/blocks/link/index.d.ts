import React from 'react';
import { Colors } from '../../atoms/colors';
interface Props {
    children: React.ReactNode;
    color?: Colors;
    href?: string;
    tagName?: 'a' | 'button' | 'span';
}
export declare const Link: React.FunctionComponent<Props>;
export {};
