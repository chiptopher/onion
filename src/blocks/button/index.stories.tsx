import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

export default {
    argTypes: {
        children: {
            control: 'text',
            defaultValue: 'Click me!',
        },
        href: {
            control: 'text',
            defaultValue: undefined,
        },
    },
    component: Button,
    title: `Blocks/Button`,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Playground = Template.bind({});

Playground.args = {};
