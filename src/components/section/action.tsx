import React from 'react';

import styles from './index.module.css';

import { Buttons } from '../buttons';

export interface SectionActionProps {
    children: React.ReactNode;
}

export const SectionAction: React.FunctionComponent<
    SectionActionProps
> = props => {
    const modifiedChildren = React.Children.toArray(props.children).map(
        // TODO remove any
        (child: any) => {
            if (child.type === Buttons) {
                return React.cloneElement(child, {
                    marginBottom:
                        child.props.marginBottom === undefined ? false : true,
                });
            } else {
                return child;
            }
        }
    );
    return <span className={styles['action']}>{modifiedChildren}</span>;
};

SectionAction.displayName = 'Section.Action';
