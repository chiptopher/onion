import React from 'react';

import { Block } from '../../atoms/block';
import { ChildrenOnlyProps } from '../../atoms/util';
import { Label, LabelProps } from '../../blocks/typography/label';
import { FooterItemProps } from './favor';
import { FooterNavItem } from './item';
import { NavContainer } from './nav-container';

export type FooterNavType = React.FunctionComponent<ChildrenOnlyProps> & {
    Item: React.FunctionComponent<FooterItemProps>;
    Title: React.FunctionComponent<LabelProps>;
};

export const FooterNav: FooterNavType = ({ children }) => (
    <NavContainer>{children}</NavContainer>
);

FooterNav.Item = FooterNavItem;
FooterNav.Title = props => (
    <Block marginBottom="0.5">
        <Label {...props} />
    </Block>
);

FooterNav.Title.displayName = 'Footer.Nav.Title';
