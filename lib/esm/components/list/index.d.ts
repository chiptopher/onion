import React from 'react';
import { ListItemProps } from './item';
interface Props {
    children: React.ReactNode;
}
export declare const List: React.FunctionComponent<Props> & {
    Item: React.FunctionComponent<ListItemProps>;
};
export {};
