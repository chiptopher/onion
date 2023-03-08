import React from 'react';

import { Block } from '../../atoms/block';
import { SpacingValues } from '../../atoms/block/types';
import { BlockSpacing } from '../../atoms/block/util';
import { Colors, Tint } from '../../atoms/colors';

export interface PlankWrapperProps {
    background?: Colors;
    backgroundTint?: Tint;
    trimmedTop?: Extract<SpacingValues, BlockSpacing>;
}

interface _Props {
    children: React.ReactNode;
}

type Props = _Props & PlankWrapperProps;

export const PlankWrapper: React.FunctionComponent<Props> = ({
    children,
    backgroundTint,
    background,
    trimmedTop,
}) => {
    return (
        <Block
            className="onion-plank-wrapper"
            color={background}
            colorTint={backgroundTint}
            paddingBottom="6"
            paddingTop={trimmedTop || '6'}
        >
            {children}
        </Block>
    );
};
