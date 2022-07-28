import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Breadcrumbs } from '.';
import { Block } from '../../atoms/block';

export default {
    component: Breadcrumbs,
    title: `Components/Breadcrumbs`,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = ({
    withContentBeneath,
    ...args
}: any) => (
    <>
        <Breadcrumbs {...args}>
            <Breadcrumbs.Item>One</Breadcrumbs.Item>
            <Breadcrumbs.Item>Two</Breadcrumbs.Item>
        </Breadcrumbs>
        <Block color="primary">Content beneath breadcrumbs</Block>
    </>
);

export const Playground = Template.bind({});

Playground.args = {};
