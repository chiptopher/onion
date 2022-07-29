import React from 'react';

import styled from 'styled-components';

import { useTheme } from '../../theme';
import { Colors, Tint } from '../colors';
import { TagName } from '../types';
import { resolveColors } from './resolve-colors';
import { resolveBorderSpacing } from './resolve-padding';
import { BorderProps, MarginProps, PaddingProps } from './types';

export type JustifyContent = 'space-between' | 'center';

interface _Props {
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    borderRadius?: boolean;
    children: React.ReactNode;
    color?: Colors;
    colorTint?: Tint;
    display?: 'flex';
    flexDirection?: 'column' | 'row';
    justifyContent?: JustifyContent;
    tagName?: TagName;
}

type Props = _Props & BorderProps & PaddingProps & MarginProps;

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
    margin,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    alignItems,
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
            {...resolveColors(theme, { color, tint: colorTint })}
            {...rest}
        />
    );
};

type SCProps = BorderProps & {
    alignItems?: string;
    backgroundColor: string;
    borderRadius: number;
    color: string;
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    margin: string;
    padding: string;
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
`;
