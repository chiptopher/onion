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
    autoFocus,
    onKeyUp,
    onKeyDown,
    ...wrapperProps
}) => {
    return (
        <Wrapper {...wrapperProps} htmlFor={id}>
            <input
                autoFocus={autoFocus}
                disabled={disabled}
                id={id}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                placeholder={placeholder}
                type="text"
                value={value}
            />
        </Wrapper>
    );
};

FormInput.displayName = 'Form.Input';
