import React from "react";

import styled from "styled-components";

import { SectionAction, SectionActionProps } from "./action";
import { SectionHeader, SectionHeaderProps } from "./header";

export const Section: React.FunctionComponent<{ children: React.ReactNode }> & {
  Action: React.FunctionComponent<SectionActionProps>;
  Header: React.FunctionComponent<SectionHeaderProps>;
} = ({ children }) => {
  return <Container>{children}</Container>;
};

Section.Header = SectionHeader;
Section.Action = SectionAction;

const Container = styled.div`
  margin-bottom: 3rem;
`;
