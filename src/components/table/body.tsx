import React from "react";

import { Body } from "../..";
import { ChildrenOnlyProps } from "../../atoms/util";
import { ChildrenOnlyComponent } from "../../util";

export const TableBody: ChildrenOnlyComponent & {
  Cell: ChildrenOnlyComponent;
  Row: React.FunctionComponent<TableBodyCellProps>;
} = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableBodyRow: ChildrenOnlyComponent = ({ children }) => (
  <tr>{children}</tr>
);

export type TableBodyCellProps = ChildrenOnlyProps &
  React.TdHTMLAttributes<HTMLTableDataCellElement>;

export const TableBodyCell: React.FunctionComponent<TableBodyCellProps> = ({
  children,
  ...rest
}) => (
  <td {...rest}>
    <Body>{children}</Body>
  </td>
);

TableBody.Cell = TableBodyCell;
TableBody.Row = TableBodyRow;
