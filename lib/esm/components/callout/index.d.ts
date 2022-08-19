import React from 'react';
import { Colors, Tint } from '../../atoms/colors';
export declare type CalloutColorOptions = Exclude<Colors, 'text'>;
interface Props {
    children: React.ReactNode;
    color: CalloutColorOptions;
    tint?: Tint;
}
export declare const Callout: React.FunctionComponent<Props>;
export {};
