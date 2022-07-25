import React from 'react';

import { Block } from '../../atoms/block';
import { Colors, Tint } from '../../atoms/colors';

export type CalloutColorOptions = Exclude<Colors, 'text'>;

interface Props {
    children: React.ReactNode;
    color: CalloutColorOptions;
    tint?: Tint;
}

export const Callout: React.FunctionComponent<Props> = ({
    children,
    color,
    tint = 'light',
}) => {
    return (
        <Block
            borderRadius
            color={color}
            colorTint={tint}
            marginBottom="1"
            padding="1"
            tagName="div"
        >
            {children}
        </Block>
    );
};
