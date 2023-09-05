import React from 'react';

import styles from './index.module.css';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { Block, Button } from '../..';
import { ChildrenOnlyProps } from '../../atoms/util';
import { ModalContext } from './contex';

interface _Props {
    fixedSize?: 'regular' | 'full';
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
            <Block
                className={classNames(styles['onion-modal-content-container'], {
                    [styles['onion-modal-content-container--width--regular']]:
                        fixedSize === 'regular',
                    [styles['onion-modal-content-container--width--full']]:
                        fixedSize === 'full',
                })}
                padding="1"
            >
                <Block padding="1">
                    <Block display="flex" justifyContent="flex-end">
                        <Button
                            color="text"
                            onClick={() => setClosed()}
                            size="none"
                        >
                            <FontAwesomeIcon icon={faX} />
                        </Button>
                    </Block>
                    {children}
                </Block>
            </Block>
        </div>
    ) : (
        <React.Fragment />
    );
};

ModalContent.displayName = 'Modal.Content';
