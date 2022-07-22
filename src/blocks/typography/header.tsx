import React from 'react';

import { Heirarcy } from './header-shared';
import { Text2, TextProps } from './text';

export const Header: React.FunctionComponent<
    Omit<TextProps, 'tagName' | 'style'> & {
        heirarchy: Heirarcy;
    }
> = ({ heirarchy, ...rest }) => {
    return (
        <Text2
            marginBottom="1.5"
            style="header"
            tagName={`h${heirarchy}`}
            {...rest}
        />
    );
};
