import React from 'react';

import styles from './index.module.css';

import { Block } from '../../atoms/block';
import {
    BlockProps,
    ColorProps,
    Hoverable,
    PaddingProps,
} from '../../atoms/block/types';
import { Size } from '../../atoms/size';
import { Text3, TextStyle } from '../typography/text3';

export interface Props {
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

export type ButtonProps = Props &
    Pick<BlockProps, 'borderRadius' | 'disabled'> &
    ColorProps &
    Hoverable<ColorProps> &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    (AsButtonProps | AsAnchorProps);

export const Button: React.FunctionComponent<ButtonProps> = ({
    type = 'button',
    color = 'primary',
    colorTint = 'regular',
    size = 'regular',
    colorTintHover = 'dark',
    children,
    href,
    onClick,
    borderRadius = true,
    colorHover,
    disabled,
}) => {
    let p: Partial<PaddingProps>;
    let textStyle: TextStyle;
    const tagName = href ? 'a' : 'button';

    switch (size) {
        case 'none':
            p = {
                paddingBottom: '0',
                paddingLeft: '0',
                paddingRight: '0',
                paddingTop: '0',
            };
            textStyle = 'caption';
            break;
        case 'large':
            p = {
                paddingBottom: '0.75',
                paddingLeft: '1.5',
                paddingRight: '1.5',
                paddingTop: '0.75',
            };
            textStyle = 'emphasized';
            break;
        case 'regular':
            p = {
                paddingBottom: '0.75',
                paddingLeft: '1.5',
                paddingRight: '1.5',
                paddingTop: '0.75',
            };
            textStyle = 'body';
            break;
        case 'small':
            p = {
                paddingBottom: '0.5',
                paddingLeft: '1',
                paddingRight: '1',
                paddingTop: '0.5',
            };
            textStyle = 'caption';
            break;
    }

    return (
        <Block
            border="none"
            borderRadius={borderRadius}
            color={color}
            colorHover={disabled ? undefined : colorHover || color}
            colorTint={disabled ? 'light' : colorTint}
            colorTintHover={disabled ? undefined : colorTintHover}
            cursor={disabled ? 'not-allowed' : 'pointer'}
            {...p}
            className={styles['onion-button']}
            disabled={disabled}
            href={href}
            onClick={onClick}
            tagName={tagName}
            textDecoration="none"
            type={type}
        >
            <Text3 style={textStyle} tagName="span">
                {children}
            </Text3>
        </Block>
    );
};
