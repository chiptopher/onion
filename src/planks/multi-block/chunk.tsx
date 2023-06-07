import React from 'react';

import styles from './chunk.module.css';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { Block } from '../../atoms/block';
import { Body } from '../../blocks/typography/body';
import { Label } from '../../blocks/typography/label';

interface _BaseProps {
    children: React.ReactNode;
    title: string;
}

interface _WithImageProps {
    imageUrl: string;
}

interface _WithIconProps {
    icon: IconProp;
}

export type MultiBlockChunkProps = _BaseProps &
    (_WithImageProps | _WithIconProps);

export const MultiBlockChunk: React.FunctionComponent<MultiBlockChunkProps> = ({
    title,
    children,
    ...rest
}) => {
    let iconProps;
    let imageProps;
    const keys = Object.keys(rest);
    if (keys.includes('imageUrl')) {
        imageProps = rest as _WithImageProps;
    } else if (keys.includes('icon')) {
        iconProps = rest as _WithIconProps;
    }

    return (
        <div className={classNames(styles['onion-multi-block-chunk'])}>
            {imageProps && <img src={imageProps.imageUrl} />}
            {iconProps && (
                <Block className={styles['icon-container']} marginBottom="1">
                    <FontAwesomeIcon icon={iconProps.icon} />
                </Block>
            )}
            <Block marginBottom="0.5">
                <Label>{title}</Label>
            </Block>
            <Body>{children}</Body>
        </div>
    );
};
