import React from 'react';

import { Block } from '../../atoms/block';
import { Colors } from '../../atoms/colors';

export type LinkProps = Props &
    Pick<
        React.ButtonHTMLAttributes<
            HTMLButtonElement | HTMLAnchorElement | HTMLSpanElement
        >,
        'onClick'
    >;

interface Props {
    children: React.ReactNode;
    color?: Colors;
    href?: string;
    tagName?: 'a' | 'button' | 'span';
}

export const Link = React.forwardRef(
    (
        {
            tagName = 'a',
            color = 'primary',
            children,
            href,
            onClick,
        }: LinkProps,
        ref: any
    ) => {
        return (
            <Block
                cursor="pointer"
                href={href}
                onClick={onClick}
                ref={ref}
                tagName={tagName}
                textColor={color}
                textDecoration="underline"
            >
                {children}
            </Block>
        );
    }
);

Link.displayName = 'Link';
