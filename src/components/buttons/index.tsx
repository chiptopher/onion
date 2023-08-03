import React from 'react';

import { Block } from '../../atoms/block';
import { Flow } from '../../layout/flow';

interface Props {
    children: React.ReactNode;
    marginBottom?: boolean;
}
export const Buttons: React.FunctionComponent<Props> = ({
    children,
    marginBottom = true,
}) => {
    return (
        <Block marginBottom={marginBottom ? '1' : undefined}>
            <Flow direction="horizontal" gap="0.5" style="stack">
                {children}
            </Flow>
        </Block>
    );
};
