import React from 'react';

import styles from './index.module.css';

import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ChildrenOnlyProps } from '../../atoms/util';
import { useLoading } from './contex';

export const LoadingSpinner: React.FunctionComponent<ChildrenOnlyProps> = ({
    children,
}) => {
    const [loading] = useLoading();
    if (loading) {
        return (
            <div className={styles['onion-loading-spinner']}>
                <FontAwesomeIcon icon={faCircleNotch} />
            </div>
        );
    } else {
        return <>{children}</>;
    }
};

LoadingSpinner.displayName = 'Loading.Spinner';
