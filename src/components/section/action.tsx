import React from 'react';

export interface SectionActionProps {
    children: React.ReactNode;
}

export const SectionAction: React.FunctionComponent<SectionActionProps> =
    props => <span className="action">{props.children}</span>;

SectionAction.displayName = 'Section.Action';
