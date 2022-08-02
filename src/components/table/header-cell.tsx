import React from 'react';

import { Block } from '../../atoms/block';
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
        <Block
            borderBottom="solid 1px black"
            tagName="th"
            textAlign="left"
            {...rest}
        >
            <Label>{children}</Label>
        </Block>
    );
};

TableHeaderCell.displayName = 'Table.Header.Cell';
