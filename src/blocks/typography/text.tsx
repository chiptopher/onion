import React from 'react';

import styled from 'styled-components';

import { block } from '../..';
import { TextAlignment } from '../../atoms/block';
import { Breakpoints } from '../../atoms/breakpoints';
import { Colors, resolveColorValue, Tint } from '../../atoms/colors';
import { isLessThan } from '../../atoms/media';
import { Block } from '../../atoms/spacing';
import { TagName } from '../../atoms/types';
import { useTextColor, useTheme } from '../../theme';

export type TextStlye =
    | 'title'
    | 'header'
    | 'subheader'
    | 'body'
    | 'label'
    | 'caption'
    | 'larger-body';

export interface TextProps {
    alignment?: TextAlignment;
    children: React.ReactNode;
    color?: Colors;
    colorTint?: Tint;
    marginBottom?: Block;
    style: TextStlye;
    tagName: TagName;
    underlined?: boolean;
}

// TODO move to atoms folder
export const Text2: React.FunctionComponent<TextProps> = ({
    alignment,
    color,
    tagName,
    underlined,
    style,
    colorTint,
    ...rest
}) => {
    const { breakpoints } = useTheme();
    const textColor = useTextColor(color);
    const props = {
        as: tagName,
        breakpoints,
        className: 'onion-text',
        color: resolveColorValue(textColor, colorTint),
        textAlign: alignment,
        ...rest,
    };

    switch (style) {
        case 'title':
            return <TitleStyleTag {...props} />;
        case 'body':
            return <BodyStyleTag {...props} />;
        case 'caption':
            return <CaptionStyleTag {...props} />;
        case 'header':
            return <HeaderStyleTag {...props} />;

        case 'subheader':
            return <SubheaderStlyeTag {...props} />;
        case 'label':
            return <LabelStyleTag {...props} />;
        case 'larger-body':
            return <LargerBodyTag {...props} />;
    }
};

const Container = styled.div<{
    breakpoints: Breakpoints;
    color: string;
    marginBottom?: Block;
    textAlign?: string;
    underlined?: boolean;
}>`
    color: ${props => props.color};
    ${props => props.marginBottom && `margin-bottom: ${block(1.5)}`};
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    ${props => props.underlined && 'text-decoration: underline;'}
    ${props => props.textAlign && `text-align: ${props.textAlign};`}
    cursor: inherit;
`;

const BodyStyleTag = styled(Container)`
    font-size: 1rem;
`;

const CaptionStyleTag = styled(Container)`
    font-size: 0.8rem;
`;

const TitleStyleTag = styled(Container)`
    font-size: 2.75rem;
    font-weight: bold;

    ${p => isLessThan(p.breakpoints.tablet.lower)} {
        font-size: 1.75rem;
    }
`;

const HeaderStyleTag = styled(Container)`
    font-size: 1.75rem;
    font-weight: bold;

    ${p => isLessThan(p.breakpoints.tablet.lower)} {
        font-size: 1.5rem;
    }
`;

const SubheaderStlyeTag = styled(Container)`
    font-size: 1.5rem;
    margin-bottom: ${block(1.5)};
    ${p => isLessThan(p.breakpoints.tablet.lower)} {
        font-size: 1.25rem;
    }
`;

const LabelStyleTag = styled(Container)`
    font-weight: bold;
    margin-bottom: ${block(1)};
    font-size: 1rem;
`;

const LargerBodyTag = styled(Container)`
    font-size: 1.2rem;
`;
