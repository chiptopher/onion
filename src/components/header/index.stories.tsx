import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '.';
import { Text2 } from '../../blocks/typography/text';

export default {
    argTypes: {
        gutter: {
            control: 'boolean',
            defaultValue: false,
        },
        inverted: {
            control: 'boolean',
            defaultValue: false,
        },
        showError: {
            control: 'boolean',
            defaultValue: true,
        },
    },
    component: Header,
    title: `Components/Header`,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = ({
    showError,
    gutter,
    ...args
}: any) => (
    <>
        <Header {...args}>
            <Header.PrimaryNav gutter={gutter}>
                <Header.Brand>
                    <Text2 style="header" tagName="span">
                        🧅 Onion Corp
                    </Text2>
                </Header.Brand>
                <Header.Menu>
                    <Header.NavContainer side="start">
                        <Header.MenuItem>About</Header.MenuItem>
                        <Header.MenuItem>Store</Header.MenuItem>
                        <Header.MenuItem>Some Other Thing</Header.MenuItem>
                    </Header.NavContainer>
                    <Header.NavContainer side="end">
                        <Header.MenuItem contrasting>Register</Header.MenuItem>
                        <Header.MenuItem>Login</Header.MenuItem>
                    </Header.NavContainer>
                </Header.Menu>
            </Header.PrimaryNav>
            {showError && <Header.Message color="danger">heck</Header.Message>}
        </Header>
        <div>content that follows the header</div>
    </>
);

export const Playground = Template.bind({});

Playground.args = {};
