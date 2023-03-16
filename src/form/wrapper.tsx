import React from 'react';

import styled from 'styled-components';

import { Block, block } from '..';
import { Colors, resolveColorValue } from '../atoms/colors';
import { Caption } from '../blocks/typography/caption';
import { Label } from '../blocks/typography/label';
import { useTheme } from '../theme';

type Help =
    | string
    | {
          color: Colors;
          text: string;
      };

export interface WrapperProps {
    borderRadius?: boolean;
    children: React.ReactNode;
    help?: Help;
    htmlFor?: string;
    label?: string | React.ReactNode;
}

export const Wrapper: React.FunctionComponent<WrapperProps> = ({
    borderRadius = true,
    children,
    htmlFor,
    label,
    help,
}) => {
    const theme = useTheme();
    return (
        <Container
            borderColor={resolveColorValue(theme.base.grey, 'regular')}
            borderRadius={borderRadius}
        >
            {label && <Label htmlFor={htmlFor}>{label}</Label>}
            <Block marginBottom="0.5">{children}</Block>
            <HelpText help={help} />
        </Container>
    );
};

interface ContainerProps {
    borderColor: string;
    borderRadius: boolean;
}

const Container = styled.div<ContainerProps>`
    margin-bottom: ${block(1)};

    input,
    textarea {
        ${p => p.borderRadius && 'border-radius: 4px;'}
        width: 100%;
        border: solid 1px ${p => p.borderColor};
        font-size: 1rem;
        padding: 0.5rem 0.5rem;
    }
`;

export const HelpText: React.FunctionComponent<{ help?: Help }> = ({
    help,
}) => {
    if (!help) {
        return <></>;
    }
    if (typeof help === 'string') {
        return <Caption>{help}</Caption>;
    } else {
        return <Caption color={help.color}>{help.text}</Caption>;
    }
};
