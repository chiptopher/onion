import React from 'react';

import { Block } from '../..';
import { ListItem, ListItemProps } from './item';

interface Props {
    children: React.ReactNode;
}

export const List: React.FunctionComponent<Props> & {
    Item: React.FunctionComponent<ListItemProps>;
} = ({ children }) => {
    return (
        <Block listStyleType="none" margin="0" padding="0" tagName="ul">
            {children}
        </Block>
    );
};

List.Item = ListItem;
