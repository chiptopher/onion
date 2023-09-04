import React from 'react';

import { Block } from '../../atoms/block';
import { BlockSpacing, SpacingValues } from '../../atoms/block/types';
import { Colors, Tint } from '../../atoms/colors';
import { Gutter, GutterSize } from '../../layout/gutter';

export interface PlankWrapperProps {
    background?: Colors;
    backgroundTint?: Tint;
    gutterSize?: GutterSize;
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
    gutterSize = 'regular',
}) => {
    return (
        <Block
            className="onion-plank-wrapper"
            color={background}
            colorTint={backgroundTint}
            paddingBottom="6"
            paddingTop={trimmedTop || '6'}
        >
            <Gutter size={gutterSize}>{children}</Gutter>
        </Block>
    );
};
