import React from 'react';

import { Block, Body } from '../..';

export interface FooterItemProps {
    children: React.ReactNode;
}

export const FooterItem: React.FunctionComponent<FooterItemProps> = ({
    children,
}) => {
    return (
        <Block marginBottom="0.25" tagName="li">
            <Body>{children}</Body>
        </Block>
    );
};
