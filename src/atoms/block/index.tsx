import React from 'react';

import styled from 'styled-components';

import { useTheme } from '../../theme';
import { Colors } from '../colors';
import { TagName } from '../types';
import { resolveColors } from './resolve-colors';
import { resolveBorderSpacing } from './resolve-padding';
import { BlockSpacing } from './util';

export type JustifyContent = 'space-between' | 'center';

interface Props {
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    borderRadius?: boolean;
    children: React.ReactNode;
    color?: Colors;
    display?: 'flex';
    flexDirection?: 'column' | 'row';
    justifyContent?: JustifyContent;
    margin?: BlockSpacing;
    marginBottom?: BlockSpacing;
    marginLeft?: BlockSpacing;
    marginRight?: BlockSpacing;
    marginTop?: BlockSpacing;
    padding?: BlockSpacing;
    paddingBottom?: BlockSpacing;
    paddingLeft?: BlockSpacing;
    paddingRight?: BlockSpacing;
    paddingTop?: BlockSpacing;
    tagName?: TagName;
}

export const Block: React.FunctionComponent<Props> = ({
    tagName = 'div',
    color,
    padding,
    paddingTop,
    paddingBottom,
    paddingRight,
    paddingLeft,
    borderRadius,
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
            {...resolveColors(theme, color)}
            {...rest}
        />
    );
};

interface SCProps {
    alignItems?: string;
    backgroundColor: string;
    borderRadius: number;
    color: string;
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    margin: string;
    padding: string;
}

const Container = styled.div<SCProps>`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    padding: ${p => p.padding};

    border-radius: ${p => p.borderRadius}px;

    ${p => p.display && `display: ${p.display};`}
    ${p => p.justifyContent && `justify-content: ${p.justifyContent};`}
    ${p => p.alignItems && `align-items: ${p.alignItems};`}
    ${p => p.flexDirection && `flex-direction: ${p.flexDirection};`}
`;
