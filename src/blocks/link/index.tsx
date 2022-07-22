import React from 'react';

import styled from 'styled-components';

import { Colors, resolveColorValue } from '../../atoms/colors';
import { useTextColor } from '../../theme';

interface SharedProps {
    children: React.ReactNode;
    color?: Colors;
    tagName?: 'a' | 'button' | 'span';
}

type Props =
    | SharedProps
    | (SharedProps & {
          href?: string;
          tagName?: 'a';
      });

export const Link: React.FunctionComponent<Props> = ({
    tagName = 'a',
    color = 'primary',
    ...rest
}) => {
    const textColor = useTextColor(color);
    return (
        <StyledTag
            as={tagName}
            color={resolveColorValue(textColor)}
            {...rest}
        />
    );
};
const StyledTag = styled.div<{ color: string }>`
    text-decoration: underline;
    border: none;
    background-color: transparent;
    padding: 0;
    color: ${props => props.color};
    cursor: pointer;
`;
