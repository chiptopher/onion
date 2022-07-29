import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from '.';
import { Body } from '../..';

export default {
    argTypes: {},
    component: List,
    title: 'Components/List',
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = () => (
    <List>
        <List.Item>
            <Body>Hello</Body>
        </List.Item>
        <List.Item>
            <Body>World</Body>
        </List.Item>
    </List>
);

export const Playground = Template.bind({});

Playground.args = {};
