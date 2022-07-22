import React from "react";

import styled from "styled-components";

import { ListItem, ListItemProps } from "./item";

interface Props {
  children: React.ReactNode;
}

export const List: React.FunctionComponent<Props> & {
  Item: React.FunctionComponent<ListItemProps>;
} = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

List.Item = ListItem;
