import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Gutter } from '.';
import { ColoredBlock } from '../../blocks/colored-block';

export default {
    argTypes: {
        children: {
            control: 'text',
            defaultValue: 'Click me!',
        },
        size: {
            control: 'text',
            defaultValue: 'regular',
        },
    },
    component: Gutter,
} as ComponentMeta<typeof Gutter>;

const Template: ComponentStory<typeof Gutter> = ({ children, ...args }) => (
    <ColoredBlock color="warning" tagName="div">
        <Gutter {...args}>
            <ColoredBlock color="primary" tagName="div">
                Hello World
            </ColoredBlock>
        </Gutter>
    </ColoredBlock>
);

export const Playground = Template.bind({});

Playground.args = {};
