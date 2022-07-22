import React from 'react';

import styled from 'styled-components';

import { Colors, resolveColorValue } from '../../atoms/colors';
import { Padding, Size, SizedPadding } from '../../atoms/size';
import {block} from '../../atoms/spacing';
import { useBackground, useBackgroundColor } from '../../theme';
import {Label} from '../typography/label';

export interface Props {
    color?: Colors;
    size?: Size;
}

export type ButtonProps = Props &
    React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;

export const Button: React.FunctionComponent<ButtonProps> = ({
    type,
    color = 'primary',
    size = 'regular',
    children,
    ...rest
}) => {
    const { color: textColor } = useBackground(color);
    const unresolvedBackgroundColor = useBackgroundColor(color);
    const padding: Padding = buttonPadding[size];
    return (
        <Container
            backgroundColor={resolveColorValue(
                unresolvedBackgroundColor,
                'regular'
            )}
            color={textColor}
            hoverBackgroundColor={resolveColorValue(
                unresolvedBackgroundColor,
                'dark'
            )}
            padding={padding}
            type={type || 'button'}
            {...rest}
        >
            <Label>{children}</Label>
        </Container>
    );
};

export const Container = styled.button<{
    backgroundColor: string;
    color: string;
    hoverBackgroundColor: string;
    padding: Padding;
}>`
    background-color: ${props => props.backgroundColor};
    border-radius: 4px;
    border: none;
    color: ${props => props.color};
    padding: ${props => props.padding};

    cursor: pointer;

    &:hover {
        background-color: ${props => props.hoverBackgroundColor};
    }
`;

const buttonPadding: SizedPadding = {
    large: `${block(2)} ${block(3)}`,
    regular: `${block(1.5)} ${block(2)}`,
    small: `${block(1)} ${block(2)}`,
};
