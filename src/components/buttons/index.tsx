import React from "react";

import styled from "styled-components";

import { Block } from "../../atoms/block";
import { block } from "../../atoms/spacing";
import { ChildrenOnlyProps } from "../../atoms/util";

export const Buttons: React.FunctionComponent<ChildrenOnlyProps> = ({
  children,
}) => {
  return (
    <Block>
      <Container>{children}</Container>
    </Block>
  );
};

const Container = styled.div`
  button {
    margin-right: ${block(1)};
  }
`;
