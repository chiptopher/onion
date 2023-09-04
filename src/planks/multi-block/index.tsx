import React, { FunctionComponent } from 'react';

import styles from './index.module.css';

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
            <div className={styles['onion-multi-block']}>
                <Gutter>
                    <Block className={styles['onion-multi-block--flow']}>
                        {children}
                    </Block>
                </Gutter>
            </div>
        </PlankWrapper>
    );
};

MultiBlock.Chunk = MultiBlockChunk;
