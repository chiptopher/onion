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
    title: `Blocks/Link`,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = props => (
    <Body>
        <Link {...props} />
    </Body>
);

export const Playground = Template.bind({});

Playground.args = {};
