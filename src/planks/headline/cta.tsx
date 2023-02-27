import React from 'react';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Block } from '../../atoms/block';
import { Colors } from '../../atoms/colors';
import { Button } from '../../blocks/button';

export interface HeadlineCTAProps {
    _containerColor?: Colors;
    children: React.ReactNode;
    href?: string;
}

export const HeadlineCTA: React.FunctionComponent<HeadlineCTAProps> = ({
    children,
    href,
    _containerColor,
}) => {
    return (
        <Button
            color={_containerColor === undefined ? 'primary' : 'light'}
            href={href}
        >
            {children}&nbsp;
            {href && (
                <Block marginLeft="0.5" tagName="span">
                    <FontAwesomeIcon icon={faArrowRight} />
                </Block>
            )}
        </Button>
    );
};
