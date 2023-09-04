/* eslint-disable react/display-name */
import React from 'react';

import styles from './index.module.css';

import { Block, Gutter } from '../..';
import { Colors } from '../../atoms/colors';
import { ChildrenOnlyProps } from '../../atoms/util';
import { HeaderContext, MenuContentContext } from './context';
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
    PrimaryNav: React.FunctionComponent<HeaderPrimaryNavProps>;
} = ({ children, inverted }) => {
    const [content, setContent] = React.useState<any>();
    const [visible, setVisible] = React.useState<boolean>();
    return (
        <MenuContentContext.Provider
            value={{ content, setContent, setVisible, visible }}
        >
            <HeaderContext.Provider value={{ inverted: Boolean(inverted) }}>
                <Block className={styles['onion-header']} tagName="header">
                    {children}
                </Block>
            </HeaderContext.Provider>
        </MenuContentContext.Provider>
    );
};

interface HeaderPrimaryNavProps extends ChildrenOnlyProps {
    gutter?: boolean;
}

export const HeaderPrimaryNav: React.FunctionComponent<
    HeaderPrimaryNavProps
> = ({ children, gutter }) => {
    const { inverted } = React.useContext(HeaderContext);
    const { content, visible } = React.useContext(MenuContentContext);
    return (
        <Block
            borderBottom={
                inverted
                    ? 'solid 1px var(--background-color--primary--light)'
                    : undefined
            }
            color={inverted ? 'white' : 'primary'}
            tagName="div"
        >
            {gutter ? (
                <Gutter>
                    <Block className={styles['onion-primary-nav']}>
                        {children}
                    </Block>
                </Gutter>
            ) : (
                <Block className={styles['onion-primary-nav']}>
                    {children}
                </Block>
            )}

            {content && (
                <Block display={visible ? undefined : 'none'} paddingBottom="1">
                    <div className={styles['mobile-header-menu']}>
                        {content}
                    </div>
                </Block>
            )}
        </Block>
    );
};

HeaderPrimaryNav.displayName = 'Header.PrimaryNav';

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
> = props => <span className={styles['header-brand']} {...props} />;

HeaderBrand.displayName = 'Header.Brand';

Header.Brand = HeaderBrand;
Header.NavContainer = HeaderNavContainer;
Header.Menu = HeaderMenu;
Header.MenuItem = HeaderMenuItem;
Header.PrimaryNav = HeaderPrimaryNav;
Header.Message = HeaderMessage;
