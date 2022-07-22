import React from 'react';

import styled from 'styled-components';

import { block } from '../../';

export interface SectionHeaderProps {
    children: React.ReactNode;
}

export const SectionHeader: React.FunctionComponent<SectionHeaderProps> = ({
    children,
}) => <Container>{children}</Container>;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 0;
    }

    margin-bottom: ${block(2)};
`;
