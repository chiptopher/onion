import React from 'react';

import styled from 'styled-components';

import { Block, Body } from '../..';

export interface FooterItemProps {
    children: React.ReactNode;
}

/*
 * @deprecated Favor Footer.Nav.Item
 */
export const FooterNavItem: React.FunctionComponent<FooterItemProps> = ({
    children,
}) => {
    console.warn('FooterItem is a deprecated component');
    return (
        <Container
            cursor="pointer"
            marginBottom="0.25"
            tagName="li"
            textDecoration="underline"
        >
            <Body>{children}</Body>
        </Container>
    );
};

const Container = styled(Block)`
    a {
        text-decoration: none;
    }
`;
