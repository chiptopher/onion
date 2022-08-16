import React from 'react';
import { Colors } from '../../atoms/colors';
export declare type LinkProps = Props & Pick<React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement | HTMLSpanElement>, 'onClick'>;
interface Props {
    children: React.ReactNode;
    color?: Colors;
    href?: string;
    tagName?: 'a' | 'button' | 'span';
}
export declare const Link: React.ForwardRefExoticComponent<Props & Pick<React.ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLSpanElement>, "onClick"> & React.RefAttributes<unknown>>;
export {};
