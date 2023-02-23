import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Form } from '.';

export default {
    argTypes: {
        showError: {
            control: 'boolean',
            defaultValue: 'false',
        },
    },
    component: Form,
    title: `Components/Form`,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = ({ showError, ...args }: any) => (
    <Form
        {...args}
        onReset={console.log}
        onSubmit={() => new Promise(resolve => setTimeout(resolve, 3000))}
    >
        <Form.Input help="Help" label="Label" />
        <Form.Input
            autoFocus
            help="Help 2"
            label="Label 2"
            onKeyDown={console.log}
            onKeyUp={console.log}
        />
        <Form.Textarea help="Help 3" label="Label 2" />
        <Form.Input
            help={{ color: 'primary', text: 'Help 4' }}
            label="Label 2"
        />
        <Form.Buttons />
        {showError && (
            <Form.ErrorMessage>You encountered an error</Form.ErrorMessage>
        )}
    </Form>
);

export const Playground = Template.bind({});

Playground.args = {};
