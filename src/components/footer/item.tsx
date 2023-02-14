import React from 'react';

import styled from 'styled-components';

import { Block, Body } from '../..';

export interface FooterItemProps {
    children: React.ReactNode;
}

export const FooterNavItem: React.FunctionComponent<FooterItemProps> = ({
    children,
}) => {
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
