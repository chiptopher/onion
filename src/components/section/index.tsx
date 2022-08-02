import React from 'react';

import { Block } from '../../atoms/block';
import { SectionAction, SectionActionProps } from './action';
import { SectionHeader, SectionHeaderProps } from './header';

export const Section: React.FunctionComponent<{ children: React.ReactNode }> & {
    Action: React.FunctionComponent<SectionActionProps>;
    Header: React.FunctionComponent<SectionHeaderProps>;
} = ({ children }) => {
    return <Block marginBottom="3">{children}</Block>;
};

Section.Header = SectionHeader;
Section.Action = SectionAction;
