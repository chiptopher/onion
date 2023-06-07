import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Callout } from '.';

export default {
    argTypes: {
        children: {
            control: 'text',
            defaultValue: 'Some text',
        },
    },
    component: Callout,
} as ComponentMeta<typeof Callout>;

const Template: ComponentStory<typeof Callout> = args => <Callout {...args} />;

export const Playground = Template.bind({});

Playground.args = {};
