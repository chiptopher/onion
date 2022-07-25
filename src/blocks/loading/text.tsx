import React from 'react';

import styled from 'styled-components';

import { block, Body } from '../..';
import { ChildrenOnlyProps } from '../../atoms/util';
import { useLoading } from './contex';

interface Props {}

export const LoadingText: React.FunctionComponent<ChildrenOnlyProps> = ({
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
    const [dots, setDots] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setDots(dots + 1);
            if (dots >= 3) {
                setDots(0);
            }
        }, 800);
        return () => clearInterval(interval);
    }, [dots, setDots]);

    return (
        <Body>
            <Container>
                <span>Loading</span>
                {dots > 0 && <span>.</span>}
                {dots > 1 && <span>.</span>}
                {dots > 2 && <span>.</span>}
            </Container>
        </Body>
    );
};

const Container = styled.span`
    span {
        margin-right: ${block(1)};
    }
`;
