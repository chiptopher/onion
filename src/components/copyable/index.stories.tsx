import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Copyable } from '.';
import { Block } from '../../atoms/block';

export default {
    component: Copyable,
    title: `Blocks/Copyable`,
} as ComponentMeta<typeof Copyable>;

const Template: ComponentStory<typeof Copyable> = args => (
    <>
        <Block marginBottom="0.5">
            <Copyable {...args}>
                <Copyable.Content>Some Content</Copyable.Content>
                <Copyable.Action style="icon" />
            </Copyable>
        </Block>
        <Block>
            <Copyable {...args}>
                <Copyable.Content>Some Content</Copyable.Content>
                <Copyable.Action style="text" />
            </Copyable>
        </Block>
    </>
);

export const Example = Template.bind({});

Example.args = {};
