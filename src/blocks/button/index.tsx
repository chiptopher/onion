import React from 'react';

import { Block } from '../../atoms/block';
import { PaddingProps } from '../../atoms/block/types';
import { Colors } from '../../atoms/colors';
import { Size } from '../../atoms/size';
import { Label } from '../typography/label';

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

export type ButtonProps = Props &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    (AsButtonProps | AsAnchorProps);

export const Button: React.FunctionComponent<ButtonProps> = ({
    type = 'button',
    color = 'primary',
    size = 'regular',
    children,
    href,
    onClick,
}) => {
    let p: Partial<PaddingProps>;
    const tagName = href ? 'a' : 'button';

    switch (size) {
        case 'large':
            p = {
                paddingBottom: '1',
                paddingLeft: '1.5',
                paddingRight: '1.5',
                paddingTop: '1',
            };
            break;
        case 'regular':
            p = {
                paddingBottom: '0.75',
                paddingLeft: '1',
                paddingRight: '1',
                paddingTop: '0.75',
            };
            break;
        case 'small':
            p = {
                paddingBottom: '0.5',
                paddingLeft: '0.75',
                paddingRight: '0.75',
                paddingTop: '0.5',
            };
            break;
    }

    return (
        <Block
            border="none"
            borderRadius
            color={color}
            colorHover={color}
            colorTintHover="dark"
            cursor="pointer"
            {...p}
            href={href}
            onClick={onClick}
            tagName={tagName}
            textDecoration="none"
            type={type}
        >
            <Label>{children}</Label>
        </Block>
    );
};
