import React from 'react';
import { DesiredInputProps } from './util';
import { WrapperProps } from './wrapper';
export declare type FormColorProps = Pick<React.InputHTMLAttributes<HTMLInputElement>, DesiredInputProps> & Omit<WrapperProps, 'children' | 'htmlFor'>;
export declare const FormColor: React.FunctionComponent<FormColorProps>;
