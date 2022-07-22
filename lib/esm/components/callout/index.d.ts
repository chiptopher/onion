import React from 'react';
import { Colors } from '../../atoms/colors';
interface Props {
    children: React.ReactNode;
    color: Exclude<Colors, 'text'>;
}
export declare const Callout: React.FunctionComponent<Props>;
export {};
