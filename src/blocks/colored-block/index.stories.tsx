import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ColoredBlock } from '.';
import { Body } from '../..';

export default {
    argTypes: {
        children: {
            control: 'text',
            defaultValue: 'Some Text',
        },
    },
    component: ColoredBlock,
    title: `Blocks/ColoredBlock`,
} as ComponentMeta<typeof ColoredBlock>;

const Template: ComponentStory<typeof ColoredBlock> = ({
    children,
    ...args
}) => (
    <ColoredBlock {...args}>
        <Body>{children}</Body>
    </ColoredBlock>
);

export const Playground = Template.bind({});

Playground.args = {};
