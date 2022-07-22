import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flow } from '.';
import { Block } from '../../atoms/block';

export default {
    argTypes: {},
    component: Flow,
    title: `Layout/Flow`,
} as ComponentMeta<typeof Flow>;

const Template: ComponentStory<typeof Flow> = args => (
    <Flow {...args}>
        <Block color="primary" tagName="span">
            Block 1
        </Block>
        <Block color="primary" tagName="span">
            Block 2
        </Block>
    </Flow>
);

export const Playground = Template.bind({});

Playground.args = {};
