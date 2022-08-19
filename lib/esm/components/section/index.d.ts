import React from 'react';
import { SectionActionProps } from './action';
import { SectionHeaderProps } from './header';
export declare const Section: React.FunctionComponent<{
    children: React.ReactNode;
}> & {
    Action: React.FunctionComponent<SectionActionProps>;
    Header: React.FunctionComponent<SectionHeaderProps>;
};
