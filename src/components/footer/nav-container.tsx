import React from 'react';

import { Block } from '../..';
import { ChildrenOnlyProps } from '../../atoms/util';

export const NavContainer: React.FunctionComponent<ChildrenOnlyProps> = ({
    children,
}) => {
    return (
        <Block marginBottom="2" tagName="nav">
            <Block listStyleType="none" margin="0" padding="0" tagName="ol">
                {children}
            </Block>
        </Block>
    );
};
