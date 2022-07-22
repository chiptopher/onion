import React from "react";

import styled from "styled-components";

import { block, Button } from "../..";
import { ChildrenOnlyProps } from "../../atoms/util";
import { ButtonProps } from "../../blocks/button";

export const HeaderMenu: React.FunctionComponent<Partial<ChildrenOnlyProps>> = (
  props
) => {
  return <Container {...props} />;
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .header-menu-end {
    .menu-item {
      margin-left: ${block(2)};
    }
  }
`;

export interface HeaderNavContainerProps {
  children?: React.ReactNode;
  side: "start" | "end";
}

export const HeaderNavContainer: React.FunctionComponent<HeaderNavContainerProps> =
  ({ side, ...rest }) => {
    return <div className={`header-menu-${side}`} {...rest} />;
  };

export type HeaderMenuItemProps = {
  children: React.ReactNode;
  contrasting?: boolean;
} & Pick<ButtonProps, "onClick">;

export const HeaderMenuItem: React.FunctionComponent<HeaderMenuItemProps> = ({
  contrasting = false,
  ...rest
}) => {
  return (
    <span className="menu-item">
      <Button color={contrasting ? "light" : "primary"} {...rest} />
    </span>
  );
};
