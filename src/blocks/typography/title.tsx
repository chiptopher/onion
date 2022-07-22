import React from "react";

import { Heirarcy } from "./header-shared";
import { Text2, TextProps } from "./text";

interface TitleProps {
  children: React.ReactNode;
  heirarchy: Heirarcy;
}

type Props = Omit<TextProps, "tagName" | "style"> & TitleProps;

export const Title: React.FunctionComponent<Props> = ({
  heirarchy,
  ...rest
}) => {
  return (
    <Text2
      marginBottom="1.5"
      style="title"
      tagName={`h${heirarchy}`}
      {...rest}
    />
  );
};
