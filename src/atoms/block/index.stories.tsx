import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Block } from '.';

export default {
    argTypes: {
        border: {
            control: 'text',
            defaultValue: undefined,
        },
        borderBottom: {
            control: 'text',
            defaultValue: undefined,
        },
        borderLeft: {
            control: 'text',
            defaultValue: undefined,
        },
        borderRight: {
            control: 'text',
            defaultValue: undefined,
        },
        borderTop: {
            control: 'text',
            defaultValue: undefined,
        },
        children: {
            control: 'text',
            defaultValue: 'Click me!',
        },
        width: {
            control: 'text',
            defaultValue: undefined,
        },
    },
    component: Block,
    title: `Atoms/Block`,
} as ComponentMeta<typeof Block>;

const Template: ComponentStory<typeof Block> = args => <Block {...args} />;

export const Playground = Template.bind({});

Playground.args = {};
