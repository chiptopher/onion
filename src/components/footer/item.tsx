import React from "react";

import styled from "styled-components";

import { block, Body } from "../..";

export interface FooterItemProps {
  children: React.ReactNode;
}

export const FooterItem: React.FunctionComponent<FooterItemProps> = ({
  children,
}) => {
  return (
    <Container>
      <Body>{children}</Body>
    </Container>
  );
};

const Container = styled.li`
  margin-bottom: ${block(0.5)};
`;
