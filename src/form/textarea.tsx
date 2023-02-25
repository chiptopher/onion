import React from 'react';

import { DesiredInputProps } from './util';
import { Wrapper, WrapperProps } from './wrapper';

export type FormTextareaProps = Pick<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    DesiredInputProps | 'rows'
> &
    Omit<WrapperProps, 'children' | 'htmlFor'>;

export const FormTextarea: React.FunctionComponent<FormTextareaProps> = ({
    onChange,
    disabled,
    id,
    placeholder,
    value,
    rows = 4,
    autoFocus,
    onKeyUp,
    onKeyDown,
    ...wrapperProps
}) => {
    return (
        <Wrapper {...wrapperProps} htmlFor={id}>
            <textarea
                autoFocus={autoFocus}
                className="input"
                disabled={disabled}
                id={id}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                placeholder={placeholder}
                rows={rows}
                value={value}
            />
        </Wrapper>
    );
};

FormTextarea.displayName = 'Form.TextArea';
