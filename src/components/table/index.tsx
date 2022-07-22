import React from "react";

import styled from "styled-components";

import { block } from "../..";
import { resolveColorValue } from "../../atoms/colors";
import { useTheme } from "../../theme";
import { ChildrenOnlyComponent } from "../../util";
import { TableBody, TableBodyCellProps } from "./body";
import { TableHeader } from "./header";
import { HeaderCellProps } from "./header-cell";

export const Table: ChildrenOnlyComponent & {
  Body: ChildrenOnlyComponent & {
    Cell: React.FunctionComponent<TableBodyCellProps>;
    Row: ChildrenOnlyComponent;
  };
  Header: ChildrenOnlyComponent & {
    Cell: React.FunctionComponent<HeaderCellProps>;
  };
} = ({ children }) => {
  const theme = useTheme();
  return (
    <Container oddRowBackgroundColor={resolveColorValue(theme.base.grey)}>
      {children}
    </Container>
  );
};

const Container = styled.table<{ oddRowBackgroundColor: string }>`
  border-collapse: collapse;
  table-layout: fixed;

  thead {
    th {
      border-bottom: solid 1px black;
      padding-right: ${block(3)};
    }
  }

  tbody {
    vertical-align: top;

    tr:nth-child(even) {
      background-color: ${(p) => p.oddRowBackgroundColor};
    }
  }
`;

Table.Header = TableHeader;
Table.Body = TableBody;
