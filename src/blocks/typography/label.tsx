import React from "react";

import { Text2, TextProps } from "./text";

type Props = Pick<React.LabelHTMLAttributes<HTMLLabelElement>, "htmlFor">;

export const Label: React.FunctionComponent<
  Omit<TextProps, "tagName" | "style"> & Props
> = (props) => {
  return <Text2 marginBottom="1" style="label" tagName="label" {...props} />;
};
