import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '.';
import { Button } from '../../blocks/button';

export default {
    argTypes: {},
    component: Modal,
    title: `Components/Modal`,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => (
    <Modal {...args}>
        <Modal.Opener>
            <Button>Oh Hi Mark</Button>
        </Modal.Opener>
        <Modal.Content>Some content</Modal.Content>
    </Modal>
);

export const Playground = Template.bind({});

Playground.args = {};
