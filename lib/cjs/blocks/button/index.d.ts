import React from 'react';
import { Colors } from '../../atoms/colors';
import { Padding, Size } from '../../atoms/size';
export interface Props {
    color?: Colors;
    size?: Size;
}
export declare type ButtonProps = Props & React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;
export declare const Button: React.FunctionComponent<ButtonProps>;
export declare const Container: import("styled-components").StyledComponent<"button", any, {
    backgroundColor: string;
    color: string;
    hoverBackgroundColor: string;
    padding: Padding;
}, never>;
