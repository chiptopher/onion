import React from 'react';
import { ChildrenOnlyComponent } from '../../util';
import { TableBodyCellProps } from './body';
import { HeaderCellProps } from './header-cell';
export declare const Table: ChildrenOnlyComponent & {
    Body: ChildrenOnlyComponent & {
        Cell: React.FunctionComponent<TableBodyCellProps>;
        Row: ChildrenOnlyComponent;
    };
    Header: ChildrenOnlyComponent & {
        Cell: React.FunctionComponent<HeaderCellProps>;
    };
};
