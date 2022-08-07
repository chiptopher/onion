import React from 'react';

import { Block } from '../../atoms/block';
import { ChildrenOnlyProps } from '../../atoms/util';
import { HeaderCellProps, TableHeaderCell } from './header-cell';

export const TableHeader: React.FunctionComponent<ChildrenOnlyProps> & {
    Cell: React.FunctionComponent<HeaderCellProps>;
} = ({ children }) => {
    return (
        <Block tagName="thead">
            <tr>{children}</tr>
        </Block>
    );
};

TableHeader.displayName = 'Table.Header';

TableHeader.Cell = TableHeaderCell;
