import React from 'react';

import styles from './index.module.css';

import { Block } from '../..';
import { BreadcrumbItem, BreadcrumbItemProps } from './item';

interface Props {
    children: React.ReactNode;
}

export const Breadcrumbs: React.FunctionComponent<Props> & {
    Item: React.FunctionComponent<BreadcrumbItemProps>;
} = ({ children }) => {
    return (
        <Block className={styles['onion-breadcrumbs']} marginBottom="1">
            <ol>
                {React.Children.toArray(children).map((child, index) => (
                    <Block key={index} tagName="li">
                        {child}
                    </Block>
                ))}
            </ol>
        </Block>
    );
};

Breadcrumbs.Item = BreadcrumbItem;
