import React from 'react';

import { Text3, TextProps } from './text3';

type _Props = Pick<React.LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'>;

export type LabelProps = Omit<TextProps, 'tagName' | 'style' | 'marginBottom'> &
    _Props;

export const Label: React.FunctionComponent<LabelProps> = props => {
    return <Text3 style="label" tagName="label" {...props} />;
};
