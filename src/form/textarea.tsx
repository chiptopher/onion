import React from "react";

import { DesiredInputProps } from "./util";
import { Wrapper, WrapperProps } from "./wrapper";

export type FormTextareaProps = Pick<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  DesiredInputProps | "rows"
> &
  Omit<WrapperProps, "children" | "htmlFor">;

export const FormTextarea: React.FunctionComponent<FormTextareaProps> = ({
  onChange,
  disabled,
  id,
  placeholder,
  value,
  rows = 4,
  ...wrapperProps
}) => {
  return (
    <Wrapper {...wrapperProps} htmlFor={id}>
      <textarea
        className="input"
        disabled={disabled}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        value={value}
      />
    </Wrapper>
  );
};
