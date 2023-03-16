import React from 'react';

import { Wrapper, WrapperProps } from './wrapper';

export type FormInputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type'
> &
    Omit<WrapperProps, 'children' | 'htmlFor'>;

export const FormInput: React.FunctionComponent<FormInputProps> = ({
    id,
    help,
    label,
    borderRadius,
    prefix,
    ...rest
}) => {
    return (
        <Wrapper
            borderRadius={borderRadius}
            help={help}
            htmlFor={id}
            label={label}
            prefix={prefix}
        >
            <input className="input" id={id} type="text" {...rest} />
        </Wrapper>
    );
};

FormInput.displayName = 'Form.Input';
