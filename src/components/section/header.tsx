import React from 'react';

import { Block, Flow } from '../../';

export interface SectionHeaderProps {
    children: React.ReactNode;
}

export const SectionHeader: React.FunctionComponent<SectionHeaderProps> = ({
    children,
}) => (
    <Block marginBottom="1">
        <Flow direction="horizontal" style="separate">
            {children}
        </Flow>
    </Block>
);

SectionHeader.displayName = 'Section.Header';
