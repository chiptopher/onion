import React from 'react';

import styled from 'styled-components';

import { Block, block, Body } from '..';
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
    action?: React.ReactNode;
    borderRadius?: boolean;
    children: React.ReactNode;
    help?: Help;
    htmlFor?: string;
    label?: string | React.ReactNode;
    prefix?: string;
}

export const Wrapper: React.FunctionComponent<WrapperProps> = ({
    borderRadius = true,
    children,
    htmlFor,
    label,
    help,
    prefix,
    action,
}) => {
    const theme = useTheme();
    return (
        <Container
            borderColor={resolveColorValue(theme.border, 'regular')}
            borderRadius={borderRadius}
            hasPrefix={Boolean(prefix)}
        >
            {label && <Label htmlFor={htmlFor}>{label}</Label>}
            <Block display="flex" marginBottom="0.5">
                {prefix && (
                    <Block
                        alignItems="center"
                        className="onion-input-wrapper--prefix"
                        color="grey"
                        colorTint="light"
                        display="flex"
                        paddingLeft="0.75"
                        paddingRight="0.75"
                    >
                        <Body>{prefix}</Body>
                    </Block>
                )}
                <>{children}</>
                {action && <Block marginLeft="0.5">{action}</Block>}
            </Block>
            <HelpText help={help} />
        </Container>
    );
};

interface ContainerProps {
    borderColor: string;
    borderRadius: boolean;
    hasPrefix: boolean;
}

const Container = styled.div<ContainerProps>`
    margin-bottom: ${block(1)};

    .onion-input-wrapper--prefix {
        border: solid 1px ${p => p.borderColor};
        border-right: none;
        ${p => p.borderRadius && 'border-radius: 4px;'}
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    input,
    textarea {
        ${p => p.borderRadius && 'border-radius: 4px;'}
        ${p =>
            p.hasPrefix &&
            `
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        `}
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
