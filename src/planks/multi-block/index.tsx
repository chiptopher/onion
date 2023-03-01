import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

import { Block } from '../../atoms/block';
import { Gutter } from '../../layout/gutter';
import { PlankWrapper, PlankWrapperProps } from '../utils';
import { MultiBlockChunk, MultiBlockChunkProps } from './chunk';

interface Props extends PlankWrapperProps {
    children: React.ReactNode;
}

export const MultiBlock: React.FunctionComponent<Props> & {
    Chunk: FunctionComponent<MultiBlockChunkProps>;
} = ({ children, ...wrapperProps }) => {
    return (
        <PlankWrapper {...wrapperProps}>
            <Container>
                <Gutter>
                    <Block className="flow" display="flex">
                        {children}
                    </Block>
                </Gutter>
            </Container>
        </PlankWrapper>
    );
};

const Container = styled(Block)`
    .flow {
        flex-wrap: wrap;
        justify-content: center;
        gap: 3rem 2rem;
    }
`;

MultiBlock.Chunk = MultiBlockChunk;
