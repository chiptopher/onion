import React from 'react';

import { Block } from '../../atoms/block';
import { Colors } from '../../atoms/colors';

export type Props = {
    children: React.ReactNode;
    color?: Colors;
    tagName?: 'span' | 'a';
} & Pick<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    'onClick' | 'target' | 'href'
>;

export const Link = React.forwardRef(
    (
        {
            color = 'primary',
            children,
            href,
            onClick,
            target,
            tagName = 'a',
        }: Props,
        ref: any
    ) => {
        const targetProps =
            target === '_blank'
                ? { rel: 'noopener noreferrer', target }
                : { target };

        return (
            <Block
                cursor="pointer"
                href={href}
                onClick={onClick}
                ref={ref}
                tagName={tagName}
                textColor={color}
                textDecoration="underline"
                {...targetProps}
            >
                {children}
            </Block>
        );
    }
);

Link.displayName = 'Link';
