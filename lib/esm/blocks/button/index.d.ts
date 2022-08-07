import React from 'react';
import { Colors } from '../../atoms/colors';
import { Size } from '../../atoms/size';
export interface Props {
    color?: Colors;
    size?: Size;
    type?: 'reset' | 'button' | 'submit';
}
export declare type ButtonProps = Props & React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;
export declare const Button: React.FunctionComponent<ButtonProps>;
