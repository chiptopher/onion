import React from 'react';

export type DesiredInputProps =
    | 'onChange'
    | 'onKeyUp'
    | 'onKeyDown'
    | 'disabled'
    | 'id'
    | 'placeholder'
    | 'value';

export type SharedInputProps = Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    DesiredInputProps
>;
