import React from 'react';

import { Block } from '../../atoms/block';
import { Colors } from '../../atoms/colors';

interface Props {
    children: React.ReactNode;
    color?: Colors;
    href?: string;
    tagName?: 'a' | 'button' | 'span';
}

export const Link: React.FunctionComponent<Props> = ({
    tagName = 'a',
    color = 'primary',
    children,
    href,
}) => {
    return (
        <Block
            cursor="pointer"
            href={href}
            tagName={tagName}
            textColor={color}
            textDecoration="underline"
        >
            {children}
        </Block>
    );
};
