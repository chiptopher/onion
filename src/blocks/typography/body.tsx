import React from "react";

import { Text2, TextProps } from "./text";

export const Body: React.FunctionComponent<
  Omit<TextProps, "tagName" | "style"> & {
    tagName?: "p" | "span";
  }
> = ({ tagName = "p", ...rest }) => {
  return <Text2 style="body" tagName={tagName} {...rest} />;
};
