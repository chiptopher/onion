import React from 'react';

import { Block, BlockProps } from '../../atoms/block';
import { ColorProps, Hoverable, PaddingProps } from '../../atoms/block/types';
import { Size } from '../../atoms/size';
import { useTheme } from '../../theme';
import { Text2 } from '../typography/text';

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
    Pick<BlockProps, 'borderRadius'> &
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
    borderRadius,
    colorHover,
}) => {
    let p: Partial<PaddingProps>;
    const tagName = href ? 'a' : 'button';

    const theme = useTheme();
    const finalBorderRadius =
        borderRadius || theme.components?.button?.borderRadius;

    switch (size) {
        case 'none':
            p = {
                paddingBottom: '0',
                paddingLeft: '0',
                paddingRight: '0',
                paddingTop: '0',
            };
            break;
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
            borderRadius={finalBorderRadius}
            color={color}
            colorHover={colorHover || color}
            colorTint={colorTint}
            colorTintHover={colorTintHover}
            cursor="pointer"
            {...p}
            href={href}
            onClick={onClick}
            tagName={tagName}
            textDecoration="none"
            type={type}
        >
            <Text2 style="label" tagName="span">
                {children}
            </Text2>
        </Block>
    );
};
