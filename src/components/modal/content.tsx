import React from 'react';

import styles from './index.module.css';

import classNames from 'classnames';

import { Block } from '../..';
import { ChildrenOnlyProps } from '../../atoms/util';
import { ModalContext } from './contex';

interface _Props {
    fixedSize?: 'regular';
}

export type ModalContentProps = _Props & ChildrenOnlyProps;

export const ModalContent: React.FunctionComponent<ModalContentProps> = ({
    children,
    fixedSize,
}) => {
    const { open, setClosed } = React.useContext(ModalContext);
    const escFunction = React.useCallback((event: any) => {
        if (event.key === 'Escape') {
            setClosed();
        }
    }, []);

    React.useEffect(() => {
        document.addEventListener('keydown', escFunction, false);
        return () => {
            document.removeEventListener('keydown', escFunction, false);
        };
    }, []);

    return open ? (
        <div className={styles['onion-modal-conent']}>
            <div
                className={styles['onion-modal-content-shadow']}
                onClick={() => setClosed()}
            />
            <div
                className={classNames(styles['onion-modal-content-container'], {
                    [styles['onion-modal-content-container--width--regular']]:
                        fixedSize === 'regular',
                })}
            >
                <Block padding="1">{children}</Block>
            </div>
        </div>
    ) : (
        <React.Fragment />
    );
};

ModalContent.displayName = 'Modal.Content';
