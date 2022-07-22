import React from "react";

import { Block } from "../../atoms/block";
import { Colors } from "../../atoms/colors";
import { TagName } from "../../atoms/types";

interface Props {
  children: React.ReactNode;
  color?: Colors;
  tagName: TagName;
}

/**
 * @deprecated
 */
export const ColoredBlock: React.FunctionComponent<Props> = ({
  color,
  tagName,
  ...rest
}) => {
  return <Block color={color} tagName={tagName} {...rest} />;
};
