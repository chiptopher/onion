import React from 'react';

import styled from 'styled-components';

import { useTheme } from '../../theme';
import { Colors, Tint } from '../colors';
import { Percents, Pixels, REMs, TagName } from '../types';
import { resolveColors } from './resolve-colors';
import { resolveBorderSpacing } from './resolve-padding';
import {
    BorderProps,
    ColorProps,
    Hoverable,
    MarginProps,
    PaddingProps,
} from './types';

export type JustifyContent = 'space-between' | 'center';

// TODO Illegal prop combons
//   verticalAlign - only on tbody

interface _Props {
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    borderRadius?: boolean;
    children: React.ReactNode;
    cursor?: 'pointer';
    display?: 'flex';
    flexDirection?: 'column' | 'row';
    href?: string;
    id?: string;
    justifyContent?: JustifyContent;
    listStyleType?: 'none';
    tagName?: TagName;
    textAlign?: 'left' | 'right' | 'center';
    textColor?: Colors;
    textColorTint?: Tint;
    textDecoration?: 'underline';
    verticalAlign?: 'top';
    width?: Pixels | REMs | Percents;
}

// TODO make an eslint warning when giving type but tagName isn't set to 'button'
type ButtonOnlyProps = {
    type?: 'reset' | 'button' | 'submit';
};

type HTMLTypes = Pick<React.ButtonHTMLAttributes<HTMLElement>, 'onClick'>;

type Props = _Props &
    BorderProps &
    PaddingProps &
    MarginProps &
    ButtonOnlyProps &
    Hoverable<ColorProps> &
    HTMLTypes;

export const Block = React.forwardRef(
    (
        {
            tagName = 'div',
            color,
            colorTint,
            borderRadius,
            padding,
            paddingTop,
            paddingBottom,
            paddingRight,
            paddingLeft,
            paddingTopHover,
            paddingBottomHover,
            paddingRightHover,
            paddingLeftHover,
            marginHover,
            marginTopHover,
            marginBottomHover,
            marginRightHover,
            marginLeftHover,
            margin,
            marginTop,
            marginBottom,
            marginRight,
            marginLeft,
            colorHover,
            colorTintHover,
            alignItems,
            textColor,
            textColorTint,
            ...rest
        }: Props,
        ref: any
    ) => {
        const theme = useTheme();
        return (
            <Container
                alignItems={alignItems}
                as={tagName}
                borderRadius={borderRadius ? 4 : 0}
                margin={resolveBorderSpacing({
                    all: margin,
                    bottom: marginBottom,
                    left: marginLeft,
                    right: marginRight,
                    top: marginTop,
                })}
                padding={resolveBorderSpacing({
                    all: padding,
                    bottom: paddingBottom,
                    left: paddingLeft,
                    right: paddingRight,
                    top: paddingTop,
                })}
                {...resolveColors(theme, {
                    color,
                    colorHover: colorHover,
                    textColor: textColor,
                    textColorTint: textColorTint,
                    tint: colorTint,
                    tintHover: colorTintHover,
                })}
                {...rest}
                ref={ref}
            />
        );
    }
);

Block.displayName = 'Block';

type SCProps = BorderProps & {
    alignItems?: string;
    backgroundColor: string;
    backgroundColorHover?: string;
    borderBottomLastChild?: string;
    borderLeftLastChild?: string;
    borderRadius: number;
    borderRightLastChild?: string;
    borderTopLastChild?: string;
    color: string;
    cursor?: string;
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    listStyleType?: string;
    margin: string;
    padding: string;
    textAlign?: string;
    textDecoration?: string;
    verticalAlign?: string;
    width?: string;
};

const Container = styled.div<SCProps>`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    padding: ${p => p.padding};
    margin: ${p => p.margin};

    border-radius: ${p => p.borderRadius}px;

    font-size: inherit;

    ${p => p.display && `display: ${p.display};`}
    ${p => p.justifyContent && `justify-content: ${p.justifyContent};`}
    ${p => p.alignItems && `align-items: ${p.alignItems};`}
    ${p => p.flexDirection && `flex-direction: ${p.flexDirection};`}

    ${p => p.border && `border: ${p.border};`}
    ${p => p.borderTop && `border-top: ${p.borderTop};`}
    ${p => p.borderRight && `border-right: ${p.borderRight};`}
    ${p => p.borderBottom && `border-bottom: ${p.borderBottom};`}
    ${p => p.borderLeft && `border-left: ${p.borderLeft};`}
    ${p => p.textDecoration && `text-decoration: ${p.textDecoration};`}
    ${p => p.listStyleType && `list-style-type: ${p.listStyleType};`}
    ${p => p.cursor && `cursor: ${p.cursor};`}
    ${p => p.width && `width: ${p.width};`}
    ${p => p.textAlign && `text-align: ${p.textAlign};`}
    ${p => p.verticalAlign && `vertical-align: ${p.verticalAlign};`}

    &:hover {
        ${p =>
            p.backgroundColorHover &&
            `background-color: ${p.backgroundColorHover};`}
    }

    &:last-child {
        ${p => p.borderTopLastChild && `border-top: ${p.borderTopLastChild};`}
        ${p =>
            p.borderBottomLastChild &&
            `border-bottom: ${p.borderBottomLastChild};`}
        ${p =>
            p.borderLeftLastChild && `border-left: ${p.borderLeftLastChild};`}
        ${p =>
            p.borderRightLastChild &&
            `border-right: ${p.borderRightLastChild};`}
    }
`;
