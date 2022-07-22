import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Block } from '.';

export default {
    argTypes: {
        children: {
            control: 'text',
            defaultValue: 'Click me!',
        },
    },
    component: Block,
    title: `Atoms/Block`,
} as ComponentMeta<typeof Block>;

const Template: ComponentStory<typeof Block> = args => <Block {...args} />;

export const Playground = Template.bind({});

Playground.args = {};
