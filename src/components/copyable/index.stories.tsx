import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Copyable } from '.';

export default {
    component: Copyable,
    title: `Blocks/Copyable`,
} as ComponentMeta<typeof Copyable>;

const Template: ComponentStory<typeof Copyable> = args => (
    <Copyable {...args}>
        <Copyable.Content>Some Content</Copyable.Content>
        <Copyable.Action />
    </Copyable>
);

export const Example = Template.bind({});

Example.args = {};
