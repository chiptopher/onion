import React from 'react';

import { Block } from '../../';

export interface SectionHeaderProps {
    children: React.ReactNode;
}

export const SectionHeader: React.FunctionComponent<SectionHeaderProps> = ({
    children,
}) => (
    <Block
        alignItems="flex-start"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginBottom="1"
    >
        {children}
    </Block>
);

SectionHeader.displayName = 'Section.Header';
