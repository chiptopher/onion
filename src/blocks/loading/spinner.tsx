import React from 'react';

import styled from 'styled-components';

import { block, Body } from '../..';
import { ChildrenOnlyProps } from '../../atoms/util';
import { useLoading } from './contex';

interface Props {}

export const LoadingSpinner: React.FunctionComponent<ChildrenOnlyProps> = ({
    children,
}) => {
    const [loading] = useLoading();
    if (loading) {
        return <Dots />;
    } else {
        return <>{children}</>;
    }
};

const Dots: React.FunctionComponent<Props> = () => {
    const [dots, setDots] = React.useState(1);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setDots(dots + 1);
            if (dots >= 10) {
                setDots(1);
            }
        }, 250);
        return () => clearInterval(interval);
    }, [dots, setDots]);

    return (
        <Body>
            <Container>
                {dots > 0 && <span>&#8226;</span>}
                {dots > 1 && <span>&#8226;</span>}
                {dots > 2 && <span>&#8226;</span>}
            </Container>
        </Body>
    );
};

const Container = styled.span`
    span {
        margin-right: ${block(1)};
    }
`;
