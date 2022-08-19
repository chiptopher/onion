import React from 'react';
import { SharedInputProps } from './util';
import { WrapperProps } from './wrapper';
export declare type FormInputProps = SharedInputProps & Omit<WrapperProps, 'children' | 'htmlFor'>;
export declare const FormInput: React.FunctionComponent<FormInputProps>;
