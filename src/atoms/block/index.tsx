import React from 'react';

import styled from 'styled-components';

import { useTheme } from '../../theme';
import { Colors, Tint } from '../colors';
import { TagName } from '../types';
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

interface _Props {
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    borderRadius?: boolean;
    children: React.ReactNode;
    cursor?: 'pointer';
    display?: 'flex';
    flexDirection?: 'column' | 'row';
    href?: string;
    justifyContent?: JustifyContent;
    tagName?: TagName;
    textColor?: Colors;
    textColorTint?: Tint;
    textDecoration?: 'underline';
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

export const Block: React.FunctionComponent<Props> = ({
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
}) => {
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
        />
    );
};

type SCProps = BorderProps & {
    alignItems?: string;
    backgroundColor: string;
    backgroundColorHover?: string;
    borderRadius: number;
    color: string;
    cursor?: string;
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    margin: string;
    padding: string;
    textDecoration?: string;
};

const Container = styled.div<SCProps>`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    padding: ${p => p.padding};
    margin: ${p => p.margin};

    border-radius: ${p => p.borderRadius}px;

    ${p => p.display && `display: ${p.display};`}
    ${p => p.justifyContent && `justify-content: ${p.justifyContent};`}
    ${p => p.alignItems && `align-items: ${p.alignItems};`}
    ${p => p.flexDirection && `flex-direction: ${p.flexDirection};`}

    ${p => p.border && `border: ${p.border};`}
    ${p => p.borderTop && `border-top: ${p.borderTop};`}
    ${p => p.borderRight && `border-right: ${p.borderRight};`}
    ${p => p.borderBottom && `border-bottom: ${p.borderBottom};`}
    ${p => p.borderLeft && `border-left: ${p.borderLeft};`}
    ${p => p.cursor && `cursor: ${p.cursor};`}
    ${p => p.textDecoration && `text-decoration: ${p.textDecoration};`}

    &:hover {
        ${p =>
            p.backgroundColorHover &&
            `background-color: ${p.backgroundColorHover};`}
    }
`;
