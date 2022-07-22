import React from "react";

import styled from "styled-components";

import { ChildrenOnlyProps } from "../../atoms/util";
import { Label } from "../../blocks/typography/label";

export type HeaderCellProps = ChildrenOnlyProps &
  React.ThHTMLAttributes<HTMLTableHeaderCellElement>;

export const TableHeaderCell: React.FunctionComponent<HeaderCellProps> = ({
  children,
  ...rest
}) => {
  return (
    <TH {...rest}>
      <Label>{children}</Label>
    </TH>
  );
};

const TH = styled.th`
  text-align: left;
`;
