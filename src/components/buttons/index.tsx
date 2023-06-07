import React from 'react';

import styles from './index.module.css';

import { Block } from '../../atoms/block';
import { ChildrenOnlyProps } from '../../atoms/util';

export const Buttons: React.FunctionComponent<ChildrenOnlyProps> = ({
    children,
}) => {
    return (
        <Block className={styles['onion-buttons']} marginBottom="1">
            {children}
        </Block>
    );
};
