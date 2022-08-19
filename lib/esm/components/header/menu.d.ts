import React from 'react';
import { ChildrenOnlyProps } from '../../atoms/util';
import { ButtonProps } from '../../blocks/button';
export declare const HeaderMenu: React.FunctionComponent<Partial<ChildrenOnlyProps>>;
export interface HeaderNavContainerProps {
    children?: React.ReactNode;
    side: 'start' | 'end';
}
export declare const HeaderNavContainer: React.FunctionComponent<HeaderNavContainerProps>;
export declare type HeaderMenuItemProps = {
    children: React.ReactNode;
    contrasting?: boolean;
} & Pick<ButtonProps, 'onClick'>;
export declare const HeaderMenuItem: React.FunctionComponent<HeaderMenuItemProps>;
