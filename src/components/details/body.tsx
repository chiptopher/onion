import React from 'react';

import { Block } from '../../atoms/block';

export interface DetailsBodyProps {
    children: React.ReactNode;
}

export const DetailsBody: React.FunctionComponent<DetailsBodyProps> = ({
    children,
}) => {
    return (
        <Block marginTop="0.5" paddingLeft="0.5">
            {children}
        </Block>
    );
};
