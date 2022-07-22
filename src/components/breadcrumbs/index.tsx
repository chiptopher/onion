import React from 'react';

import styled from 'styled-components';

import { block } from '../..';
import { BreadcrumbItem, BreadcrumbItemProps } from './item';

interface Props {
    children: React.ReactNode;
}

export const Breadcrumbs: React.FunctionComponent<Props> & {
    Item: React.FunctionComponent<BreadcrumbItemProps>;
} = ({ children }) => {
    return (
        <Container>
            <ol>
                {React.Children.toArray(children).map((child, index) => (
                    <li key={index}>{child}</li>
                ))}
            </ol>
        </Container>
    );
};

Breadcrumbs.Item = BreadcrumbItem;

const Container = styled.div`
    ol {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        list-style-type: none;

        li:before {
            content: '/';
            margin: ${block(1.5)} ${block(1.5)};
        }
    }
`;
