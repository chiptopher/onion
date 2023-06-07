import React from 'react';

import styles from './index.module.css';

import { Block } from '../../atoms/block';
import { ChildrenOnlyComponent } from '../../util';
import { TableBody, TableBodyCellProps } from './body';
import { TableHeader } from './header';
import { HeaderCellProps } from './header-cell';

export const Table: ChildrenOnlyComponent & {
    Body: ChildrenOnlyComponent & {
        Cell: React.FunctionComponent<TableBodyCellProps>;
        Row: ChildrenOnlyComponent;
    };
    Header: ChildrenOnlyComponent & {
        Cell: React.FunctionComponent<HeaderCellProps>;
    };
} = ({ children }) => {
    return (
        <div className={styles['onion-table']}>
            <Block tagName="table">{children}</Block>
        </div>
    );
};

Table.Header = TableHeader;
Table.Body = TableBody;
