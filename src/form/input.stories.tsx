import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormInput } from './input';

export default {
    argTypes: {
        borderRadius: {
            control: 'boolean',
        },
        prefix: {
            control: 'text',
            defaultValue: undefined,
        },
    },
    component: FormInput,
    title: `Components/Form/FormInput`,
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = args => (
    <FormInput {...args} />
);

export const Playground = Template.bind({});

Playground.args = {};
