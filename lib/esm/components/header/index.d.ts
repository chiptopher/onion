import React from 'react';
import { ChildrenOnlyProps } from '../../atoms/util';
import { CalloutColorOptions } from '../callout';
import { HeaderNavContainerProps, HeaderMenuItemProps } from './menu';
export declare const Header: React.FunctionComponent<ChildrenOnlyProps> & {
    Brand: React.FunctionComponent<ChildrenOnlyProps>;
    Menu: React.FunctionComponent<ChildrenOnlyProps>;
    MenuItem: React.FunctionComponent<HeaderMenuItemProps>;
    Message: React.FunctionComponent<HeaderMessageProps>;
    NavContainer: React.FunctionComponent<HeaderNavContainerProps>;
    PrimaryNav: React.FunctionComponent<ChildrenOnlyProps>;
};
export declare const HeaderPrimaryNav: React.FunctionComponent<ChildrenOnlyProps>;
interface HeaderMessageProps {
    children: React.ReactNode;
    color: CalloutColorOptions;
}
export declare const HeaderMessage: React.FunctionComponent<HeaderMessageProps>;
export declare const HeaderBrand: React.FunctionComponent<ChildrenOnlyProps & {
    href?: string;
}>;
export {};
