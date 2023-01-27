import React from 'react';

import styled from 'styled-components';

import { block } from '../..';
import { Colors, resolveColorValue, Tint } from '../../atoms/colors';
import { Block } from '../../atoms/spacing';
import { TagName } from '../../atoms/types';
import { useTextColor } from '../../theme';

export type TextStlye =
    | 'title'
    | 'header'
    | 'subheader'
    | 'body'
    | 'label'
    | 'caption'
    | 'larger-body';

export interface TextProps {
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
    color,
    tagName,
    underlined,
    style,
    colorTint,
    ...rest
}) => {
    const textColor = useTextColor(color);
    const props = {
        as: tagName,
        className: 'onion-text',
        color: resolveColorValue(textColor, colorTint),
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
    color: string;
    marginBottom?: Block;
    underlined?: boolean;
}>`
    color: ${props => props.color};
    ${props => props.marginBottom && `margin-bottom: ${block(1.5)}`};
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    ${props => props.underlined && 'text-decoration: underline'}
    cursor: inherit;
`;

const TitleStyleTag = styled(Container)`
    font-size: 2.75rem;
    font-weight: bold;
`;

const BodyStyleTag = styled(Container)`
    font-size: 1rem;
`;

const CaptionStyleTag = styled(Container)`
    font-size: 0.8rem;
`;

const HeaderStyleTag = styled(Container)`
    font-size: 1.75rem;
    font-weight: bold;
`;

const SubheaderStlyeTag = styled(Container)`
    font-size: 1.5rem;
    margin-bottom: ${block(1.5)};
`;

const LabelStyleTag = styled(Container)`
    font-weight: bold;
    margin-bottom: ${block(1)};
    font-size: 1rem;
`;

const LargerBodyTag = styled(Container)`
    font-size: 1.2rem;
`;
