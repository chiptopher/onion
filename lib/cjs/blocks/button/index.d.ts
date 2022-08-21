import React from 'react';
import { Colors } from '../../atoms/colors';
import { Size } from '../../atoms/size';
export interface Props {
    color?: Colors;
    size?: Size;
}
export interface AsButtonProps {
    href?: never;
    type?: 'reset' | 'button' | 'submit';
}
export interface AsAnchorProps {
    href?: string;
    type?: never;
}
export declare type ButtonProps = Props & React.ButtonHTMLAttributes<HTMLButtonElement> & (AsButtonProps | AsAnchorProps);
export declare const Button: React.FunctionComponent<ButtonProps>;
