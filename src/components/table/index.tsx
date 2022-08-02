import React from 'react';

import styled from 'styled-components';

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
        <Container>
            <Block tagName="table">{children}</Block>
        </Container>
    );
};

const Container = styled.div`
    table {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;

        tbody {
            // TODO figure out how to do this in Block
            tr:last-child {
                td {
                    border-style: none;
                }
            }
        }
    }
`;

Table.Header = TableHeader;
Table.Body = TableBody;
