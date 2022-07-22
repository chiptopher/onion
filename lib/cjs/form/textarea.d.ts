import React from 'react';
import { DesiredInputProps } from './util';
import { WrapperProps } from './wrapper';
export declare type FormTextareaProps = Pick<React.TextareaHTMLAttributes<HTMLTextAreaElement>, DesiredInputProps | 'rows'> & Omit<WrapperProps, 'children' | 'htmlFor'>;
export declare const FormTextarea: React.FunctionComponent<FormTextareaProps>;
