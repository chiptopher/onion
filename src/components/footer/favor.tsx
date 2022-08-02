import React from 'react';

import { Block, Caption } from '../..';

export interface FooterItemProps {
    children: React.ReactNode;
}

export const FooterFlavor: React.FunctionComponent<FooterItemProps> = ({
    children,
}) => {
    return (
        <Block marginBottom="0.75">
            <Caption>{children}</Caption>
        </Block>
    );
};
