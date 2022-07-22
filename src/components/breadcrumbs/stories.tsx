import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Breadcrumbs } from '.';

export default {
    argTypes: {},
    component: Breadcrumbs,
    title: `Components/Breadcrumbs`,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = args => (
    <Breadcrumbs {...args}>
        <Breadcrumbs.Item>One</Breadcrumbs.Item>
        <Breadcrumbs.Item>Two</Breadcrumbs.Item>
    </Breadcrumbs>
);

export const Playground = Template.bind({});

Playground.args = {};
