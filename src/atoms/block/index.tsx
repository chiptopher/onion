import React from 'react';

import styled from 'styled-components';

import { useTheme } from '../../theme';
import { Colors } from '../colors';
import { TagName } from '../types';
import { resolveColors } from './resolve-colors';
import { resolvePadding } from './resolve-padding';
import { BlockPadding } from './util';

interface Props {
    borderRadius?: boolean;
    children: React.ReactNode;
    color?: Colors;
    padding?: BlockPadding;
    tagName?: TagName;
    display?: 'flex';
    justifyContent?: 'center' | 'space-between'
    alignItems?: 'center' | 'flex-start' | 'flex-end'
}

export const Block: React.FunctionComponent<Props> = ({
    tagName = 'div',
    color,
    padding,
    borderRadius,
    ...rest
}) => {
    const theme = useTheme();
    return (
        <Container
            as={tagName}
            borderRadius={borderRadius ? 4 : 0}
            padding={resolvePadding(padding)}
            {...resolveColors(theme, color)}
            {...rest}
        />
    );
};

interface SCProps {
    backgroundColor: string;
    borderRadius: number;
    color: string;
    padding: string;
    display?: string;
    justifyContent?: string;
    alignItems?: string;
}

const Container = styled.div<SCProps>`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    padding: ${p => p.padding};

    margin-bottom: 1rem;

    border-radius: ${p => p.borderRadius}px;

    ${p => p.display && (`display: ${p.display};`)}
    ${p => p.justifyContent && (`justify-content: ${p.justifyContent};`)}
    ${p => p.alignItems && (`justify-content: ${p.justifyContent};`)}
`;
