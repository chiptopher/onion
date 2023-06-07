import React from 'react';

import { Heirarcy } from './header-shared';
import { Text3, TextProps } from './text3';

interface SubheaderProps {
    heirarchy: Heirarcy;
}

type Props = Omit<TextProps, 'tagName' | 'style'> & SubheaderProps;

export const Subheader: React.FunctionComponent<
    Omit<Props, 'marginBottom'>
> = ({ heirarchy, ...rest }) => {
    return (
        <Text3
            marginBottom
            style="subheader"
            tagName={`h${heirarchy}`}
            {...rest}
        />
    );
};
