import React from "react";

import styled from "styled-components";

import { block } from "../..";
import { resolveColorValue } from "../../atoms/colors";
import { useTheme } from "../../theme";

export interface ListItemProps {
  children: React.ReactNode;
}

export const ListItem: React.FunctionComponent<ListItemProps> = ({
  children,
}) => {
  const theme = useTheme();
  return (
    <Container c={resolveColorValue(theme.base.grey, "regular")}>
      {children}
    </Container>
  );
};

const Container = styled.li<{ c: string }>`
  padding: ${block(0.5)} ${block(1)};

  &:nth-child(odd) {
    background-color: ${(p) => p.c};
  }
`;
