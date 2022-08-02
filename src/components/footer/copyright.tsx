import React from 'react';

import { Block, Caption } from '../..';
import { ChildrenOnlyProps } from '../../atoms/util';

export const FooterCopyright: React.FunctionComponent<ChildrenOnlyProps> = ({
    children,
}) => {
    return (
        <Block marginBottom="0.75">
            <Caption>
                &copy; {new Date().getFullYear()} {children}
            </Caption>
        </Block>
    );
};
