import React from 'react';

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Block } from '../../atoms/block';
import { Link, Props as LinkProps } from '../../blocks/link';

export const OutboundLink: React.FunctionComponent<LinkProps> = ({
    children,
    ...rest
}) => (
    <Link target="_blank" {...rest}>
        {children}
        <Block marginLeft="0.25" tagName="span">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
        </Block>
    </Link>
);
