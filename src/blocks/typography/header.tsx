import React from 'react';

import { Heirarcy } from './header-shared';
import { Text3, TextProps } from './text3';

export const Heading: React.FunctionComponent<
    Omit<TextProps, 'tagName' | 'style' | 'marginBottom'> & {
        heirarchy: Heirarcy;
    }
> = ({ heirarchy, ...rest }) => {
    return (
        <Text3
            marginBottom
            style="header"
            tagName={`h${heirarchy}`}
            {...rest}
        />
    );
};
