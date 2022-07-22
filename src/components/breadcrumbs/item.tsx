import React from "react";

import { Link } from "../../blocks/link";
import { Body } from "../../blocks/typography/body";

export interface BreadcrumbItemProps {
  children: React.ReactNode;
}

export const BreadcrumbItem: React.FunctionComponent<BreadcrumbItemProps> = ({
  children,
}) => {
  return (
    <Body tagName="span">
      <Link color="primary" tagName="span">
        {children}
      </Link>
    </Body>
  );
};
