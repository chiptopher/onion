import React from 'react';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Form } from '.';
import { Button } from '../blocks/button';

export default {
    argTypes: {
        showError: {
            control: 'boolean',
            defaultValue: 'false',
        },
    },
    component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = ({ showError, ...args }: any) => (
    <Form
        {...args}
        onReset={console.log}
        onSubmit={() => new Promise(resolve => setTimeout(resolve, 3000))}
    >
        <Form.Input help="Help" label="Label" />
        <Form.Input
            action={
                <Button size="small">
                    <FontAwesomeIcon icon={faArrowRight} />
                </Button>
            }
            autoFocus
            help="Help 2"
            label="Label 2"
            onKeyDown={console.log}
            onKeyUp={console.log}
            prefix="Words"
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
