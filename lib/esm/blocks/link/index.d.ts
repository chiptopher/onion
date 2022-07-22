import React from 'react';
import { Colors } from '../../atoms/colors';
interface SharedProps {
    children: React.ReactNode;
    color?: Colors;
    tagName?: 'a' | 'button' | 'span';
}
declare type Props = SharedProps | (SharedProps & {
    href?: string;
    tagName?: 'a';
});
export declare const Link: React.FunctionComponent<Props>;
export {};
