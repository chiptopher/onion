import React from 'react';

import { Block } from '../..';
import { ChildrenOnlyProps } from '../../atoms/util';
import { FooterCopyright } from './copyright';
import { FooterFlavor } from './favor';
import { FooterItemProps, FooterNavItem } from './item';
import { FooterNav, FooterNavType } from './nav';
import { FooterTitle } from './title';

interface Props {
    children: React.ReactNode;
}

export const Footer: React.FunctionComponent<Props> & {
    Copyright: React.FunctionComponent<ChildrenOnlyProps>;
    Flavor: React.FunctionComponent<ChildrenOnlyProps>;
    Item: React.FunctionComponent<FooterItemProps>;
    Nav: FooterNavType;
    Title: React.FunctionComponent<ChildrenOnlyProps>;
} = ({ children }) => {
    return (
        <Block
            color="grey"
            colorTint="light"
            paddingBottom="1.5"
            paddingLeft="0"
            paddingRight="0"
            paddingTop="3"
            textAlign="center"
        >
            {children}
        </Block>
    );
};

/*
 * @deprecated Favor Footer.Nav.Item
 */
Footer.Item = props => {
    console.warn('FooterItem is a deprecated component');
    return <FooterNavItem {...props} />;
};

Footer.Item.displayName = 'Footer.Item';
Footer.Flavor = FooterFlavor;
Footer.Copyright = FooterCopyright;
Footer.Title = FooterTitle;
Footer.Nav = FooterNav;
