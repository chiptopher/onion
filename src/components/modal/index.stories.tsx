import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '.';
import { Button } from '../../blocks/button';
import { Body } from '../../blocks/typography/body';
import { Heading } from '../../blocks/typography/header';

export default {
    argTypes: { fixedSize: { control: 'select', options: ['regular'] } },
    component: Modal,
    title: `Components/Modal`,
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
            <Heading heirarchy="1">Heading</Heading>
            <Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                mi augue, consequat quis massa eu, facilisis ornare nisi. Etiam
                egestas arcu non libero ullamcorper semper eu in magna.
                Phasellus eu.
            </Body>
        </Modal.Content>
    </Modal>
);

export const Playground = Template.bind({});

Playground.args = {};
