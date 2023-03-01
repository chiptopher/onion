import React from 'react';

import { Block, FlexDirection, JustifyContent } from '../../atoms/block';

interface Props {
    children?: React.ReactNode;
    direction: 'horizontal' | 'vertical';
    reverse?: boolean;
    style?: 'separate';
}

export const Flow: React.FunctionComponent<Props> = ({
    children,
    direction,
    reverse,
    ...rest
}) => {
    let justifyContent: JustifyContent | undefined;
    switch (rest.style) {
        case 'separate':
            justifyContent = 'space-between';
            break;
        default:
            break;
    }

    let finalDirection: FlexDirection =
        direction === 'horizontal' ? 'row' : 'column';
    if (reverse) {
        finalDirection = `${finalDirection}-reverse`;
    }

    return (
        <Block
            alignItems="center"
            display="flex"
            flexDirection={finalDirection}
            justifyContent={justifyContent}
        >
            {children}
        </Block>
    );
};
