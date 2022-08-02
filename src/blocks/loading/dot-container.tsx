import React from 'react';

import { Block } from '../../atoms/block';
import { ChildrenOnlyProps } from '../../atoms/util';

export const BlockContainer: React.FunctionComponent<ChildrenOnlyProps> = ({
    children,
}) => (
    <Block marginRight="0.5" tagName="span">
        {children}
    </Block>
);
