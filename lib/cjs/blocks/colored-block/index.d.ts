import React from 'react';
import { Colors } from '../../atoms/colors';
import { TagName } from '../../atoms/types';
interface Props {
    children: React.ReactNode;
    color?: Colors;
    tagName: TagName;
}
/**
 * @deprecated
 */
export declare const ColoredBlock: React.FunctionComponent<Props>;
export {};
