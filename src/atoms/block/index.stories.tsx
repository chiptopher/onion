import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Block } from '.';
import { ColorsOptions, ColorArangementOptions } from '../colors';

export default {
    argTypes: {
        border: {
            control: 'text',
            defaultValue: undefined,
        },
        borderBottom: {
            control: 'text',
            defaultValue: undefined,
        },
        borderLeft: {
            control: 'text',
            defaultValue: undefined,
        },
        borderRight: {
            control: 'text',
            defaultValue: undefined,
        },
        borderTop: {
            control: 'text',
            defaultValue: undefined,
        },
        children: {
            control: 'text',
            defaultValue: 'Hello world',
        },
        color: {
            control: 'select',
            defaultValue: undefined,
            options: [undefined, ...ColorsOptions],
        },
        colorHover: {
            control: 'select',
            defaultValue: undefined,
            options: [undefined, ...ColorsOptions],
        },
        colorTint: {
            control: 'select',
            defaultValue: undefined,
            options: [undefined, ...ColorArangementOptions],
        },
        colorTintHover: {
            control: 'select',
            defaultValue: undefined,
            options: [undefined, ...ColorArangementOptions],
        },
        cursor: {
            control: 'select',
            defaultValue: undefined,
            options: [undefined, 'pointer'],
        },
        fontWeight: {
            control: 'text',
            defaultValue: undefined,
        },
        margin: {
            control: 'text',
            defaultValue: undefined,
        },
        marginBottom: {
            control: 'text',
            defaultValue: undefined,
        },
        marginLeft: {
            control: 'text',
            defaultValue: undefined,
        },
        marginRight: {
            control: 'text',
            defaultValue: undefined,
        },
        marginTop: {
            control: 'text',
            defaultValue: undefined,
        },
        padding: {
            control: 'text',
            defaultValue: undefined,
        },
        paddingBottom: {
            control: 'text',
            defaultValue: undefined,
        },
        paddingLeft: {
            control: 'text',
            defaultValue: undefined,
        },
        paddingRight: {
            control: 'text',
            defaultValue: undefined,
        },
        paddingTop: {
            control: 'text',
            defaultValue: undefined,
        },
        textAlign: {
            control: 'select',
            defaultValue: undefined,
            options: [undefined, 'left', 'right', 'center'],
        },
        textColor: {
            control: 'select',
            defaultValue: undefined,
            options: [undefined, ...ColorsOptions],
        },
        textColorTint: {
            control: 'select',
            defaultValue: undefined,
            options: [undefined, ...ColorArangementOptions],
        },
        textDecoration: {
            control: 'select',
            defaultValue: undefined,
            options: [undefined, 'none', 'underline'],
        },
        width: {
            control: 'text',
            defaultValue: undefined,
        },
    },
    component: Block,
} as ComponentMeta<typeof Block>;

const Template: ComponentStory<typeof Block> = ({ children, ...args }) => (
    <Block {...args}>
        <div>{children}</div>
    </Block>
);

export const Playground = Template.bind({});

Playground.args = {};
