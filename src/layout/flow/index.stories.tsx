import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flow } from '.';
import { Block } from '../../atoms/block';

export default {
    argTypes: {},
    component: Flow,
} as ComponentMeta<typeof Flow>;

export const Playground: ComponentStory<typeof Flow> = args => (
    <Flow {...args}>
        <Block color="primary" tagName="span">
            Block 1
        </Block>
        <Block color="primary" tagName="span">
            Block 2
        </Block>
    </Flow>
);

Playground.args = {};
