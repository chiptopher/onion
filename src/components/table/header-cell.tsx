import React from 'react';

import styled from 'styled-components';

import { Label } from '../../blocks/typography/label';

export type HeaderCellProps = {
    children?: React.ReactNode;
    width?: `${number}%` | `${number}px`;
};

export const TableHeaderCell: React.FunctionComponent<HeaderCellProps> = ({
    children,
    ...rest
}) => {
    return (
        <TH {...rest}>
            <Label>{children}</Label>
        </TH>
    );
};

const TH = styled.th`
    text-align: left;
`;

TableHeaderCell.displayName = 'Table.Header.Cell';
