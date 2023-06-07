import React from 'react';

import { Text3, TextProps } from './text3';

export const Body: React.FunctionComponent<
    Omit<TextProps, 'tagName' | 'style' | 'marginBottom'> & {
        marginBottom?: boolean;
        tagName?: 'p' | 'span';
    }
> = ({ tagName = 'p', ...rest }) => {
    return (
        <Text3 marginBottom={false} style="body" tagName={tagName} {...rest} />
    );
};
