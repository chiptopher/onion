import React from 'react';

export type DesiredInputProps =
    | 'onChange'
    | 'disabled'
    | 'id'
    | 'placeholder'
    | 'value';

export type SharedInputProps = Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    DesiredInputProps
>;
