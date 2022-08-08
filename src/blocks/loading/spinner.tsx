import React from 'react';

import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { ChildrenOnlyProps } from '../../atoms/util';
import { useLoading } from './contex';

export const LoadingSpinner: React.FunctionComponent<ChildrenOnlyProps> = ({
    children,
}) => {
    const [loading] = useLoading();
    if (loading) {
        return (
            <Container>
                <FontAwesomeIcon icon={faCircleNotch} />
            </Container>
        );
    } else {
        return <>{children}</>;
    }
};

LoadingSpinner.displayName = 'Loading.Spinner';

const Container = styled.div`
    animation-name: spin;
    animation-duration: 1500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
