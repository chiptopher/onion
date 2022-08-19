import React from 'react';

import { Text2, TextProps } from './text';

export const LargerBody: React.FunctionComponent<
    Omit<TextProps, 'tagName' | 'style'> & {
        tagName?: 'p' | 'span';
    }
> = ({ tagName = 'p', ...rest }) => {
    return <Text2 style="larger-body" tagName={tagName} {...rest} />;
};
