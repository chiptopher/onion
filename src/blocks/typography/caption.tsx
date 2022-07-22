import React from "react";

import { Text2, TextProps } from "./text";

export const Caption: React.FunctionComponent<
  Omit<TextProps, "tagName" | "style"> & {
    tagName?: "p" | "span";
  }
> = ({ tagName = "p", ...rest }) => {
  return <Text2 style="caption" tagName={tagName} {...rest} />;
};
