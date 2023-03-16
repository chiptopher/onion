import React from 'react';

import { DesiredInputProps } from './util';
import { Wrapper, WrapperProps } from './wrapper';

export type FormColorProps = Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    DesiredInputProps
> &
    Omit<WrapperProps, 'children' | 'htmlFor' | 'prefix' | 'action'>;

export const FormColor: React.FunctionComponent<FormColorProps> = ({
    onChange,
    disabled,
    id,
    placeholder,
    value,
    ...wrapperProps
}) => (
    <Wrapper {...wrapperProps}>
        <input
            disabled={disabled}
            id={id}
            onChange={onChange}
            placeholder={placeholder}
            type="color"
            value={value}
        />
    </Wrapper>
);

FormColor.displayName = 'Form.Color';
