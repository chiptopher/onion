import React from "react";

import styled from "styled-components";

import { block, Caption } from "../..";

export interface FooterItemProps {
  children: React.ReactNode;
}

export const FooterFlavor: React.FunctionComponent<FooterItemProps> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};

const Container = styled(Caption)`
  margin-bottom: ${block(1.5)};
`;
