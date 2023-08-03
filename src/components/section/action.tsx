import React from 'react';

export interface SectionActionProps {
    children: React.ReactNode;
}
import styles from './index.module.css';

export const SectionAction: React.FunctionComponent<
    SectionActionProps
> = props => <span className={styles['action']}>{props.children}</span>;

SectionAction.displayName = 'Section.Action';
