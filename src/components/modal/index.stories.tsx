import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '.';
import { Button } from '../../blocks/button';

export default {
    argTypes:  { fixedSize: { control: 'select', options: ['regular'] } },
    component: Modal,
    title: `Components/Modal`,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({fixedSize, ...args}: any) => (
    <Modal {...args}>
        <Modal.Opener>
            <Button>Oh Hi Mark</Button>
        </Modal.Opener>
        <Modal.Content fixedSize={fixedSize}>Some content</Modal.Content>
    </Modal>
);

export const Playground = Template.bind({});

Playground.args = {};
