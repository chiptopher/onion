/* eslint-disable react/display-name */

import React from 'react';

import { ChildrenOnlyProps } from '../atoms/util';
import { Loading } from '../blocks/loading';
import { useLoading } from '../blocks/loading/contex';
import { FormButtons } from './buttons';
import { FormColor, FormColorProps } from './color';
import { FormErrorMessage } from './error-message';
import { FormInput, FormInputProps } from './input';
import { FormTextarea, FormTextareaProps } from './textarea';

interface Props extends ChildrenOnlyProps {
    onReset: () => void;
    onSubmit: () => Promise<any>;
}

const _Form: React.FunctionComponent<Props> = ({
    onReset,
    onSubmit,
    children,
    ...props
}) => {
    const [, setLoading] = useLoading();

    return (
        <form
            onReset={onReset}
            onSubmit={async e => {
                e.preventDefault();
                setLoading(true);
                return onSubmit().then(() => setLoading(false));
            }}
            {...props}
        >
            {children}
        </form>
    );
};

export const Form: React.FunctionComponent<Props> & {
    Buttons: React.FunctionComponent<Record<string, never>>;
    Color: React.FunctionComponent<FormColorProps>;
    ErrorMessage: React.FunctionComponent<ChildrenOnlyProps>;
    Input: React.FunctionComponent<FormInputProps>;
    Textarea: React.FunctionComponent<FormTextareaProps>;
} = props => (
    <Loading>
        <_Form {...props} />
    </Loading>
);

Form.Buttons = FormButtons;
Form.Input = FormInput;
Form.Textarea = FormTextarea;
Form.Color = FormColor;
Form.ErrorMessage = FormErrorMessage;
