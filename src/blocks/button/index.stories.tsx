import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

export default {
    argTypes: {
        children: {
            control: 'text',
            defaultValue: 'Click me!',
        },
        disabled: {
            control: 'boolean',
            defaultValue: undefined,
        },
        href: {
            control: 'text',
            defaultValue: undefined,
        },
    },
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
    <Button {...args} onClick={e => console.log(e)} />
);

export const Playground = Template.bind({});

Playground.args = {};
