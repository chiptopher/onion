import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

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
        <SmallContainer display="flex" marginBottom="0.5" tagName="div">
            <Copyable {...args}>
                <Copyable.Content>Some text that is longer</Copyable.Content>
                <Copyable.Action style="icon" />
            </Copyable>
        </SmallContainer>
    </>
);

export const Example = Template.bind({});

Example.args = {};

const SmallContainer = styled(Block)``;
