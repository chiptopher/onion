import React from 'react';

import styled from 'styled-components';

import { block } from '../..';
import { resolveColorValue } from '../../atoms/colors';
import { ChildrenOnlyProps } from '../../atoms/util';
import { useTheme } from '../../theme';
import { FooterCopyright } from './copyright';
import { FooterFlavor } from './favor';
import { FooterItem, FooterItemProps } from './item';
import { NavContainer } from './nav-container';
import { FooterTitle } from './title';

interface Props {
    children: React.ReactNode;
}

export const Footer: React.FunctionComponent<Props> & {
    Copyright: React.FunctionComponent<ChildrenOnlyProps>;
    Flavor: React.FunctionComponent<ChildrenOnlyProps>;
    Item: React.FunctionComponent<FooterItemProps>;
    Nav: React.FunctionComponent<ChildrenOnlyProps>;
    Title: React.FunctionComponent<ChildrenOnlyProps>;
} = ({ children }) => {
    const theme = useTheme();
    return (
        <Container bc={resolveColorValue(theme.base.grey, 'light')}>
            {children}
        </Container>
    );
};

const Container = styled.footer<{ bc: string }>`
    background-color: ${props => props.bc};
    padding: ${block(6)} 0 ${block(3)};
    text-align: center;
`;

Footer.Item = FooterItem;
Footer.Flavor = FooterFlavor;
Footer.Copyright = FooterCopyright;
Footer.Title = FooterTitle;
// eslint-disable-next-line react/display-name
Footer.Nav = props => <NavContainer {...props} />;
