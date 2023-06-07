import React from 'react';

import { Block, Body } from '../..';
import { ChildrenOnlyProps } from '../../atoms/util';
import { ChildrenOnlyComponent } from '../../util';

export const TableBody: ChildrenOnlyComponent & {
    Cell: ChildrenOnlyComponent;
    Row: React.FunctionComponent<TableBodyCellProps>;
} = ({ children }) => {
    return (
        <Block tagName="tbody" verticalAlign="top">
            {children}
        </Block>
    );
};

export const TableBodyRow: ChildrenOnlyComponent = ({ children }) => (
    <Block tagName="tr">{children}</Block>
);

export type TableBodyCellProps = ChildrenOnlyProps;

export const TableBodyCell: React.FunctionComponent<TableBodyCellProps> = ({
    children,
    ...rest
}) => {
    return (
        <Block
            borderBottom={`solid 2px var(--background-color--grey--regular)`}
            paddingBottom="0.5"
            paddingTop="0.5"
            tagName="td"
            {...rest}
        >
            <Body tagName="span">{children}</Body>
        </Block>
    );
};

TableBody.displayName = 'Table.Body';
TableBodyRow.displayName = 'Table.Body.Row';
TableBodyCell.displayName = 'Table.Body.Cell';

TableBody.Cell = TableBodyCell;
TableBody.Row = TableBodyRow;
