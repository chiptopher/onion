import React from 'react';

import { Block, Body } from '../..';

export interface FooterItemProps {
    children: React.ReactNode;
}

export const FooterNavItem: React.FunctionComponent<FooterItemProps> = ({
    children,
}) => {
    return (
        <Block
            cursor="pointer"
            marginBottom="0.25"
            tagName="li"
            textDecoration="underline"
        >
            <Body>{children}</Body>
        </Block>
    );
};
