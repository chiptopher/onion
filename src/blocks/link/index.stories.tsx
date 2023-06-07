import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from '.';
import { Body } from '../typography/body';

export default {
    argTypes: {
        children: {
            control: 'text',
            defaultValue: 'Click me!',
        },
    },
    component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = props => (
    <Body>
        <Link href="https://google.com" target="_blank" {...props} />
    </Body>
);

export const Playground = Template.bind({});

Playground.args = {};
