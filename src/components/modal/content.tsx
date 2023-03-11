import React from 'react';

import styled from 'styled-components';

import { block } from '../..';
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
        <Container>
            <Shadow onClick={() => setClosed()} />
            <ContentContainer width={fixedSize ? '720' : undefined}>
                <div>{children}</div>
            </ContentContainer>
        </Container>
    ) : (
        <React.Fragment />
    );
};

ModalContent.displayName = 'Modal.Content';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

const Shadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);
`;

const ContentContainer = styled.div<{ width?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    & > div {
        background-color: white;
        padding: ${block(3)};
        z-index: 99;
        border-radius: 4px;

        ${p => p.width && `width: ${p.width}px;`}
    }
`;
