import React from 'react';

import styles from './index.module.css';

import { Block } from '../../atoms/block';

interface Props {
    children: React.ReactNode;
    footer?: React.ReactNode;
    header?: React.ReactNode;
}

export const Page: React.FunctionComponent<Props> = ({
    children,
    header,
    footer,
}) => {
    return (
        <Block
            className={styles['onion-page']}
            display="flex"
            flexDirection="column"
        >
            <div>{header}</div>
            <main>{children}</main>
            <div>{footer}</div>
        </Block>
    );
};
