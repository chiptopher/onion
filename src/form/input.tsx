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
    ...rest
}) => {
    return (
        <Wrapper help={help} htmlFor={id} label={label}>
            <input className="input" id={id} type="text" {...rest} />
        </Wrapper>
    );
};

FormInput.displayName = 'Form.Input';
