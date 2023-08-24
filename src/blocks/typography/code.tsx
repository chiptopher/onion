import React from 'react';

import { Text3, TextProps } from './text3';

export const Code: React.FunctionComponent<
    Omit<TextProps, 'tagName' | 'style' | 'marginBottom'>
> = props => {
    return <Text3 style="code" tagName="code" {...props} />;
};
