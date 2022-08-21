/* eslint-disable react/display-name */
import React from 'react';

import styled from 'styled-components';

import { Block, block } from '../..';
import { Colors } from '../../atoms/colors';
import { ChildrenOnlyProps } from '../../atoms/util';
import { HeaderContext } from './context';
import {
    HeaderMenu,
    HeaderMenuItem,
    HeaderNavContainer,
    HeaderNavContainerProps,
    HeaderMenuItemProps,
} from './menu';

interface Props {
    children: React.ReactNode;
    inverted?: boolean;
}
export const Header: React.FunctionComponent<Props> & {
    Brand: React.FunctionComponent<ChildrenOnlyProps>;
    Menu: React.FunctionComponent<ChildrenOnlyProps>;
    MenuItem: React.FunctionComponent<HeaderMenuItemProps>;
    Message: React.FunctionComponent<HeaderMessageProps>;
    NavContainer: React.FunctionComponent<HeaderNavContainerProps>;
    PrimaryNav: React.FunctionComponent<ChildrenOnlyProps>;
} = ({ children, inverted }) => (
    <HeaderContext.Provider value={{ inverted: Boolean(inverted) }}>
        <Block marginBottom="1.5" tagName="header">
            {children}
        </Block>
    </HeaderContext.Provider>
);

export const HeaderPrimaryNav: React.FunctionComponent<ChildrenOnlyProps> = ({
    children,
}) => {
    const { inverted } = React.useContext(HeaderContext);
    return (
        <Block color={inverted ? 'white' : 'primary'} tagName="div">
            <Container>{children}</Container>
        </Block>
    );
};

HeaderPrimaryNav.displayName = 'Header.PrimaryNav';

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

interface HeaderMessageProps {
    children: React.ReactNode;
    color?: Colors;
}

export const HeaderMessage: React.FunctionComponent<HeaderMessageProps> = ({
    children,
    color,
}) => (
    <Block
        color={color}
        colorTint="light"
        paddingBottom="0.5"
        paddingLeft="1.5"
        paddingRight="1.5"
        paddingTop="0.5"
    >
        {children}
    </Block>
);

HeaderMessage.displayName = 'Header.Message';

export const HeaderBrand: React.FunctionComponent<
    ChildrenOnlyProps & { href?: string }
> = props => <a className="header-brand" {...props} />;

HeaderBrand.displayName = 'Header.Brand';

Header.Brand = HeaderBrand;
Header.NavContainer = HeaderNavContainer;
Header.Menu = HeaderMenu;
Header.MenuItem = HeaderMenuItem;
Header.PrimaryNav = HeaderPrimaryNav;
Header.Message = HeaderMessage;
