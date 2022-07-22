import React from 'react';
import { ChildrenOnlyProps } from '../atoms/util';
import { FormColorProps } from './color';
import { FormInputProps } from './input';
import { FormTextareaProps } from './textarea';
interface Props extends ChildrenOnlyProps {
    onReset: () => void;
    onSubmit: () => Promise<any>;
}
export declare const Form: React.FunctionComponent<Props> & {
    Buttons: React.FunctionComponent<Record<string, never>>;
    Color: React.FunctionComponent<FormColorProps>;
    ErrorMessage: React.FunctionComponent<ChildrenOnlyProps>;
    Input: React.FunctionComponent<FormInputProps>;
    Textarea: React.FunctionComponent<FormTextareaProps>;
};
export {};
