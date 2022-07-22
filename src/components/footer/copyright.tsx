import React from 'react';

import styled from 'styled-components';

import { block, Caption } from '../..';
import { ChildrenOnlyProps } from '../../atoms/util';

export const FooterCopyright: React.FunctionComponent<ChildrenOnlyProps> = ({
    children,
}) => {
    return (
        <Container>
            &copy; {new Date().getFullYear()} {children}
        </Container>
    );
};

const Container = styled(Caption)`
    margin-bottom: ${block(1.5)};
`;
