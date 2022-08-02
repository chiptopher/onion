import React from 'react';

import styled from 'styled-components';

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

const Container = styled.thead<{ color: string }>``;

TableHeader.Cell = TableHeaderCell;
