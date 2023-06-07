import React, { FunctionComponent } from 'react';

import styles from './index.module.css';

import { Block } from '../../atoms/block';
import { DetailsBody, DetailsBodyProps } from './body';
import { DetailsSummary, DetailsSummaryProps } from './summary';

interface Props {
    children: React.ReactNode;
    indicator?: React.ReactNode | null;
    initialOpen?: boolean;
}

export const Details: React.FunctionComponent<Props> & {
    Body: FunctionComponent<DetailsBodyProps>;
    Summary: FunctionComponent<DetailsSummaryProps>;
} = ({ children, initialOpen, indicator }) => {
    const validChildren = React.Children.toArray(children).map((child: any) => {
        if (child.type === DetailsSummary) {
            return React.cloneElement(child, { indicator });
        } else {
            return child;
        }
    });

    return (
        <Block
            className={styles['onion-details']}
            open={initialOpen}
            tagName="details"
        >
            {validChildren}
        </Block>
    );
};

Details.Summary = DetailsSummary;
Details.Body = DetailsBody;
