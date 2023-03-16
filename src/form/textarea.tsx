import React from 'react';

import { Wrapper, WrapperProps } from './wrapper';

export type FormTextareaProps = Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    'type'
> &
    Omit<WrapperProps, 'children' | 'htmlFor' | 'prefix' | 'action'>;

export const FormTextarea: React.FunctionComponent<FormTextareaProps> = ({
    id,
    help,
    label,
    borderRadius,
    ...rest
}) => {
    return (
        <Wrapper
            borderRadius={borderRadius}
            help={help}
            htmlFor={id}
            label={label}
        >
            <textarea className="input" id={id} {...rest} />
        </Wrapper>
    );
};

FormTextarea.displayName = 'Form.TextArea';
