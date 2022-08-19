import React from 'react';
import { BreadcrumbItemProps } from './item';
interface Props {
    children: React.ReactNode;
}
export declare const Breadcrumbs: React.FunctionComponent<Props> & {
    Item: React.FunctionComponent<BreadcrumbItemProps>;
};
export {};
