import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '.';
import { Button } from '../../blocks/button';
import { Form } from '../../form';

export default {
    argTypes: {
        fixedSize: { control: 'select', options: ['regular', 'full'] },
    },
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({
    fixedSize,
    ...args
}: any) => (
    <Modal {...args}>
        <Modal.Opener>
            <Button>Oh Hi Mark</Button>
        </Modal.Opener>
        <Modal.Content fixedSize={fixedSize}>
            <Modal.Title>Title</Modal.Title>
            <Form onReset={console.log} onSubmit={Promise.resolve}>
                <Form.Input label="Test" />
                <Form.Textarea label="Text Area" />
                <Form.Buttons />
            </Form>
        </Modal.Content>
    </Modal>
);

export const Playground = Template.bind({});

Playground.args = {};
