import React from 'react';
import { ChildrenOnlyProps } from '../../atoms/util';
import { FooterItemProps } from './item';
interface Props {
    children: React.ReactNode;
}
export declare const Footer: React.FunctionComponent<Props> & {
    Copyright: React.FunctionComponent<ChildrenOnlyProps>;
    Flavor: React.FunctionComponent<ChildrenOnlyProps>;
    Item: React.FunctionComponent<FooterItemProps>;
    Nav: React.FunctionComponent<ChildrenOnlyProps>;
    Title: React.FunctionComponent<ChildrenOnlyProps>;
};
export {};
