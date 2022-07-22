import React from "react";

import { Heirarcy } from "./header-shared";
import { Text2, TextProps } from "./text";

interface SubheaderProps {
  heirarchy: Heirarcy;
}

type Props = Omit<TextProps, "tagName" | "style"> & SubheaderProps;

export const Subheader: React.FunctionComponent<Props> = ({
  heirarchy,
  ...rest
}) => {
  return (
    <Text2
      marginBottom="1.5"
      style="subheader"
      tagName={`h${heirarchy}`}
      {...rest}
    />
  );
};
