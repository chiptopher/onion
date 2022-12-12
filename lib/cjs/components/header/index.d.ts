import React from 'react';
import { Colors } from '../../atoms/colors';
import { ChildrenOnlyProps } from '../../atoms/util';
import { HeaderNavContainerProps, HeaderMenuItemProps } from './menu';
interface Props {
    children: React.ReactNode;
    inverted?: boolean;
}
export declare const Header: React.FunctionComponent<Props> & {
    Brand: React.FunctionComponent<ChildrenOnlyProps>;
    Menu: React.FunctionComponent<ChildrenOnlyProps>;
    MenuItem: React.FunctionComponent<HeaderMenuItemProps>;
    Message: React.FunctionComponent<HeaderMessageProps>;
    NavContainer: React.FunctionComponent<HeaderNavContainerProps>;
    PrimaryNav: React.FunctionComponent<HeaderPrimaryNavProps>;
};
interface HeaderPrimaryNavProps extends ChildrenOnlyProps {
    gutter?: boolean;
}
export declare const HeaderPrimaryNav: React.FunctionComponent<HeaderPrimaryNavProps>;
interface HeaderMessageProps {
    children: React.ReactNode;
    color?: Colors;
}
export declare const HeaderMessage: React.FunctionComponent<HeaderMessageProps>;
export declare const HeaderBrand: React.FunctionComponent<ChildrenOnlyProps & {
    href?: string;
}>;
export {};
