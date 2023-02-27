import React from 'react';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Block } from '../../atoms/block';
import { Button } from '../../blocks/button';

export interface HeadlineCTAProps {
    children: React.ReactNode;
    href?: string;
}

export const HeadlineCTA: React.FunctionComponent<HeadlineCTAProps> = ({
    children,
    href,
}) => {
    return (
        <Button color="light">
            {children}&nbsp;
            {href && (
                <Block marginLeft="0.5" tagName="span">
                    <FontAwesomeIcon icon={faArrowRight} />
                </Block>
            )}
        </Button>
    );
};
