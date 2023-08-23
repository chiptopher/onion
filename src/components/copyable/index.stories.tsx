import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Copyable } from '.';
import { Block } from '../../atoms/block';

export default {
    component: Copyable,
} as ComponentMeta<typeof Copyable>;

const Template: ComponentStory<typeof Copyable> = args => (
    <>
        <Block marginBottom="0.5">
            <Copyable {...args}>
                <Copyable.Content>Some Content Icon</Copyable.Content>
                <Copyable.Action style="icon" />
            </Copyable>
        </Block>
        <Block marginBottom="0.5">
            <Copyable {...args}>
                <Copyable.Content>Some Content Text</Copyable.Content>
                <Copyable.Action style="text" />
            </Copyable>
        </Block>
        <Block display="flex" marginBottom="0.5" tagName="div">
            <Copyable {...args}>
                <Copyable.Content>Some text that is longer</Copyable.Content>
                <Copyable.Action style="icon" />
            </Copyable>
        </Block>
        <Block display="flex" marginBottom="0.5" tagName="div">
            <Copyable {...args}>
                <Copyable.Content>Some text that is longer</Copyable.Content>
                <Copyable.Action style="icon" />
            </Copyable>
        </Block>
    </>
);

export const Example = Template.bind({});

Example.args = {};
