import React from 'react';

import { Heirarcy } from './header-shared';
import { Text3, TextProps } from './text3';

interface TitleProps {
    children: React.ReactNode;
    heirarchy: Heirarcy;
}

type Props = Omit<TextProps, 'tagName' | 'style'> & TitleProps;

export const Title: React.FunctionComponent<Omit<Props, 'marginBottom'>> = ({
    heirarchy,
    ...rest
}) => <Text3 marginBottom style="title" tagName={`h${heirarchy}`} {...rest} />;
