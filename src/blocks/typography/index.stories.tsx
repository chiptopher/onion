import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Body } from './body';
import { Caption } from './caption';
import { Code } from './code';
import { Heading } from './header';
import { Label } from './label';
import { Emphasized } from './larger-body';
import { Subheader } from './subheader';
import { Text3 } from './text3';
import { Title } from './title';

export default {
    argTypes: {
        children: {
            control: 'text',
            defaultValue: 'Click me!',
        },
        fontFamily: {
            control: {
                defaultValue: 'Nunito',
                options: ['IBM Plex Sans', 'Nunito'],
                type: 'select',
            },
        },
    },
    component: Text3,
} as ComponentMeta<typeof Text3>;

const Template: ComponentStory<typeof Text3> = args => <Text3 {...args} />;

export const Playground = Template.bind({});

Playground.args = {};

export const Presets = () => (
    <div>
        <Title heirarchy="1">
            Title: The quick brown fox jumps over the lazy dog
        </Title>
        <Heading heirarchy="2">
            {' '}
            Heading: The quick brown fox jumps over the lazy dog
        </Heading>
        <Subheader heirarchy="3">
            SubHeader: The quick brown fox jumps over the lazy dog
        </Subheader>
        <Emphasized>
            Emphasized: The quick brown fox jumps over the lazy dog
        </Emphasized>
        <Body>Body: The quick brown fox jumps over the lazy dog</Body>
        <Label>Label: The quick brown fox jumps over the lazy dog</Label>
        <Caption>Caption: The quick brown fox jumps over the lazy dog</Caption>
        <Code>Code: The quick brown fix jumps over the lazy dog</Code>
    </div>
);
