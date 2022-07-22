import React from 'react';

import styled from 'styled-components';

import { block } from '..';
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
    children: React.ReactNode;
    help?: Help;
    htmlFor?: string;
    label?: string | React.ReactNode;
}

export const Wrapper: React.FunctionComponent<WrapperProps> = ({
    children,
    htmlFor,
    label,
    help,
}) => {
    const theme = useTheme();
    return (
        <Container borderColor={resolveColorValue(theme.base.grey, 'regular')}>
            {label && <Label htmlFor={htmlFor}>{label}</Label>}
            <div>{children}</div>
            <HelpText help={help} />
        </Container>
    );
};

const Container = styled.div<{ borderColor: string }>`
    margin-bottom: ${block(1)};

    input,
    textarea {
        border-radius: 4px;
        width: 100%;
        border: solid 1px ${p => p.borderColor};
        font-size: 1rem;
        padding: 0.25rem 0.25rem;
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
