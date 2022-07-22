import React from 'react';
import { ChildrenOnlyProps } from '../../atoms/util';
import { ChildrenOnlyComponent } from '../../util';
export declare const TableBody: ChildrenOnlyComponent & {
    Cell: ChildrenOnlyComponent;
    Row: React.FunctionComponent<TableBodyCellProps>;
};
export declare const TableBodyRow: ChildrenOnlyComponent;
export declare type TableBodyCellProps = ChildrenOnlyProps & React.TdHTMLAttributes<HTMLTableDataCellElement>;
export declare const TableBodyCell: React.FunctionComponent<TableBodyCellProps>;
