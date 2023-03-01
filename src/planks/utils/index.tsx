import React from 'react';

import { Block } from '../../atoms/block';
import { Colors, Tint } from '../../atoms/colors';

export interface PlankWrapperProps {
    background?: Colors;
    backgroundTint?: Tint;
}

interface _Props {
    children: React.ReactNode;
}

type Props = _Props & PlankWrapperProps;

export const PlankWrapper: React.FunctionComponent<Props> = ({
    children,
    backgroundTint,
    background,
}) => {
    return (
        <Block
            color={background}
            colorTint={backgroundTint}
            paddingBottom="6"
            paddingTop="6"
        >
            {children}
        </Block>
    );
};
