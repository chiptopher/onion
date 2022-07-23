import React from 'react';

import styled from 'styled-components';

import { resolveColorValue } from '../../atoms/colors';
import { ChildrenOnlyProps } from '../../atoms/util';
import { useTheme } from '../../theme';
import { HeaderCellProps, TableHeaderCell } from './header-cell';

export const TableHeader: React.FunctionComponent<ChildrenOnlyProps> & {
    Cell: React.FunctionComponent<HeaderCellProps>;
} = ({ children }) => {
    const theme = useTheme();
    return (
        <Container color={resolveColorValue(theme.base.grey)}>
            <tr>{children}</tr>
        </Container>
    );
};

TableHeader.displayName = 'Table.Header';

const Container = styled.thead<{ color: string }>``;

TableHeader.Cell = TableHeaderCell;
