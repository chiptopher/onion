import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Buttons } from '.';
import { Button } from '../../blocks/button';
import { Modal } from '../modal';

export default {
    component: Buttons,
    title: `Components/Buttons`,
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = args => (
    <Buttons {...args}>
        <Button>One</Button>
        <Button>Two</Button>
    </Buttons>
);

export const Playground = Template.bind({});

export const WithModal = () => {
    return (
        <Buttons>
            <Modal>
                <Modal.Opener>
                    <Button>One</Button>
                </Modal.Opener>
                <Modal.Content>Modal Content</Modal.Content>
            </Modal>
            <Button>Two</Button>
        </Buttons>
    );
};

Playground.args = {};
