import React from 'react';

import { SharedInputProps } from './util';
import { Wrapper, WrapperProps } from './wrapper';

export type FormInputProps = SharedInputProps &
    Omit<WrapperProps, 'children' | 'htmlFor'>;

export const FormInput: React.FunctionComponent<FormInputProps> = ({
    onChange,
    disabled,
    id,
    placeholder,
    value,
    ...wrapperProps
}) => {
    return (
        <Wrapper {...wrapperProps} htmlFor={id}>
            <input
                disabled={disabled}
                id={id}
                onChange={onChange}
                placeholder={placeholder}
                type="text"
                value={value}
            />
        </Wrapper>
    );
};

FormInput.displayName = 'Form.Input';
