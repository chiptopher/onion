import React from 'react';

import { Text2, TextProps } from './text';

type _Props = Pick<React.LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'>;

export type LabelProps = Omit<TextProps, 'tagName' | 'style'> & _Props;

export const Label: React.FunctionComponent<LabelProps> = props => {
    return <Text2 marginBottom="1" style="label" tagName="label" {...props} />;
};
