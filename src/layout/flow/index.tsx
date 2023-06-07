import React from 'react';

import classNames from 'classnames';

import { Block } from '../../atoms/block';
import { FlexDirection, JustifyContent } from '../../atoms/block/types';
import { SpacingValues } from '../../atoms/block/types';

type AlignType = 'left' | 'right' | 'center';

interface BaseProps {
    align?: AlignType;
    children?: React.ReactNode;
    direction: 'horizontal' | 'vertical';
    reverse?: boolean;
}

type PropsSeparate = BaseProps & {
    style?: 'separate';
};
type PropsStack = BaseProps & {
    gap?: SpacingValues;
    style?: 'stack';
};

type Props = PropsSeparate | PropsStack;

export const Flow: React.FunctionComponent<Props> = ({
    children,
    direction,
    reverse,
    style,
    align = 'center',
    ...rest
}) => {
    let justifyContent: JustifyContent | undefined;
    let gap;
    switch (style) {
        case 'separate':
            justifyContent = 'space-between';
            break;
        case 'stack':
            gap = (rest as PropsStack).gap;
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
            alignItems={map(align)}
            className={classNames('onion-flow')}
            display="flex"
            flexDirection={finalDirection}
            gap={gap}
            justifyContent={justifyContent}
        >
            {children}
        </Block>
    );
};

function map(v: AlignType) {
    switch (v) {
        case 'left':
            return 'flex-start';
        case 'right':
            return 'flex-end';
        case 'center':
            return 'center';
    }
}
