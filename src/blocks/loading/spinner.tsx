import React from 'react';

import { Body } from '../..';
import { ChildrenOnlyProps } from '../../atoms/util';
import { useLoading } from './contex';
import { BlockContainer } from './dot-container';

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
            <div>
                {dots > 0 && <BlockContainer>&#8226;</BlockContainer>}
                {dots > 1 && <BlockContainer>&#8226;</BlockContainer>}
                {dots > 2 && <BlockContainer>&#8226;</BlockContainer>}
            </div>
        </Body>
    );
};

LoadingSpinner.displayName = 'Loading.Spinner';
