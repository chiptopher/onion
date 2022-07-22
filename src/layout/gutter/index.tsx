import React from "react";

import styled from "styled-components";

import { block } from "../..";
import { Breakpoints } from "../../atoms/breakpoints";
import { isLessThan } from "../../atoms/media";
import { ChildrenOnlyProps } from "../../atoms/util";
import { useTheme } from "../../theme";

export const Gutter: React.FunctionComponent<ChildrenOnlyProps> = ({
  children,
}) => {
  const theme = useTheme();
  return (
    <Container breakpoints={theme.breakpoints}>
      <div className="inner-gutter">{children}</div>
    </Container>
  );
};

const Container = styled.div<{ breakpoints: Breakpoints }>`
  margin: 0 auto;
  width: 60%;

  .inner-gutter {
  }

  ${(p) => isLessThan(p.breakpoints.mobile.upper)} {
    width: 100%;

    .inner-gutter {
      padding: 0 ${block(2)};
    }
  }
`;
