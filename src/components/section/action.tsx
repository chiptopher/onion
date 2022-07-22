import React from 'react';

export interface SectionActionProps {
    children: React.ReactNode;
}

export const SectionAction: React.FunctionComponent<
    SectionActionProps
> = props => {
    return <span className="action">{props.children}</span>;
};
