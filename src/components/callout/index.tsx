import React from 'react';

import { Block } from '../../atoms/block';
import { Colors } from '../../atoms/colors';

interface Props {
    children: React.ReactNode;
    color: Exclude<Colors, 'text'>;
}

export const Callout: React.FunctionComponent<Props> = ({
    children,
    color,
}) => {
    return (
        <Block
            borderRadius
            color={color}
            marginBottom="1"
            padding="1"
            tagName="div"
        >
            {children}
        </Block>
    );
};
