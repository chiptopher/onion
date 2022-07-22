import React from "react";

import { Subheader } from "../..";
import { ChildrenOnlyProps } from "../../atoms/util";

export const FooterTitle: React.FunctionComponent<ChildrenOnlyProps> = ({
  children,
}) => {
  return <Subheader heirarchy="2">{children}</Subheader>;
};
