import React from 'react';

import { Block, JustifyContent } from '../../atoms/block';

interface Props {
    children?: React.ReactNode;
    direction: 'horizontal' | 'vertical';
    style?: 'separate';
}

export const Flow: React.FunctionComponent<Props> = ({
    children,
    direction,
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
    return (
        <Block
            alignItems="center"
            display="flex"
            flexDirection={direction === 'horizontal' ? 'row' : 'column'}
            justifyContent={justifyContent}
        >
            {children}
        </Block>
    );
};
