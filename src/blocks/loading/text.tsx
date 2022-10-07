import React from 'react';

import { Body } from '../..';
import { ChildrenOnlyProps } from '../../atoms/util';
import { useLoading } from './contex';
import { BlockContainer } from './dot-container';

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
        <Body tagName="span">
            <div>
                <BlockContainer>Loading</BlockContainer>
                {dots > 0 && <BlockContainer>.</BlockContainer>}
                {dots > 1 && <BlockContainer>.</BlockContainer>}
                {dots > 2 && <BlockContainer>.</BlockContainer>}
            </div>
        </Body>
    );
};

LoadingText.displayName = 'Loading.Text';
