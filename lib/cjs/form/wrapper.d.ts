import React from 'react';
import { Colors } from '../atoms/colors';
declare type Help = string | {
    color: Colors;
    text: string;
};
export interface WrapperProps {
    children: React.ReactNode;
    help?: Help;
    htmlFor?: string;
    label?: string | React.ReactNode;
}
export declare const Wrapper: React.FunctionComponent<WrapperProps>;
export declare const HelpText: React.FunctionComponent<{
    help?: Help;
}>;
export {};
