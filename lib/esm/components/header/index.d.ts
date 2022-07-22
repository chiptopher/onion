import React from 'react';
import { ChildrenOnlyProps } from '../../atoms/util';
import { HeaderNavContainerProps, HeaderMenuItemProps } from './menu';
export declare const Header: React.FunctionComponent<ChildrenOnlyProps> & {
    Brand: React.FunctionComponent<ChildrenOnlyProps>;
    Menu: React.FunctionComponent<ChildrenOnlyProps>;
    MenuItem: React.FunctionComponent<HeaderMenuItemProps>;
    NavContainer: React.FunctionComponent<HeaderNavContainerProps>;
};
export declare const HeaderBrand: React.FunctionComponent<ChildrenOnlyProps & {
    href?: string;
}>;
