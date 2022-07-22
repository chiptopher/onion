/* eslint-disable react/display-name */
import React from 'react';

import styled from 'styled-components';

import { block } from '../..';
import { ChildrenOnlyProps } from '../../atoms/util';
import { ColoredBlock } from '../../blocks/colored-block';
import {
    HeaderMenu,
    HeaderMenuItem,
    HeaderNavContainer,
    HeaderNavContainerProps,
    HeaderMenuItemProps,
} from './menu';

export const Header: React.FunctionComponent<ChildrenOnlyProps> & {
    Brand: React.FunctionComponent<ChildrenOnlyProps>;
    Menu: React.FunctionComponent<ChildrenOnlyProps>;
    MenuItem: React.FunctionComponent<HeaderMenuItemProps>;
    NavContainer: React.FunctionComponent<HeaderNavContainerProps>;
} = ({ children }) => {
    return (
        <header>
            <ColoredBlock color="primary" tagName="div">
                <Container>{children}</Container>
            </ColoredBlock>
        </header>
    );
};

const Container = styled.nav`
    display: flex;
    padding: ${block(1)} ${block(3)};

    .header-brand {
        display: flex;
        align-items: center;
        white-space: nowrap;

        * {
            margin-right: ${block(2)};
        }
    }
`;

export const HeaderBrand: React.FunctionComponent<
    ChildrenOnlyProps & { href?: string }
> = props => {
    return <a className="header-brand" {...props} />;
};
Header.Brand = HeaderBrand;
Header.NavContainer = HeaderNavContainer;
Header.Menu = HeaderMenu;
Header.MenuItem = HeaderMenuItem;
