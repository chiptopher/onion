import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

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
        <Container open={initialOpen} tagName="details">
            {validChildren}
        </Container>
    );
};

Details.Summary = DetailsSummary;
Details.Body = DetailsBody;

const Container = styled(Block)`
    .ontion-details__open-indicator {
        transition: transform 0.15s ease-out;
    }

    &:not([open]) {
        .ontion-details__open-indicator {
            transform: rotate(0deg);
        }
    }
    &[open] {
        .ontion-details__open-indicator {
            transform: rotate(90deg);
        }
    }
`;
