import React from 'react';

import styles from './index.module.css';

import { Block } from '../../atoms/block';

export interface ListItemProps {
    children: React.ReactNode;
}

export const ListItem: React.FunctionComponent<ListItemProps> = ({
    children,
}) => {
    return (
        <Block
            className={styles['onion-list-item']}
            paddingBottom="0.25"
            paddingLeft="0.5"
            paddingRight="0.5"
            paddingTop="0.25"
        >
            {children}
        </Block>
    );
};
