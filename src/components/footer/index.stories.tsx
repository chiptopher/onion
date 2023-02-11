import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from '.';
import { OutboundLink } from '../outbound-link';

export default {
    argTypes: {
        children: {
            control: 'text',
            defaultValue: 'Click me!',
        },
    },
    component: Footer,
    title: `Components/Footer`,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
    <Footer>
        <Footer.Title>Meme</Footer.Title>
        <Footer.Nav>
            <Footer.Nav.Item>Thing the First</Footer.Nav.Item>
            <Footer.Nav.Item>
                <OutboundLink
                    color="text"
                    href="https://google.com"
                    target="_blank"
                >
                    Second Doodad
                </OutboundLink>
            </Footer.Nav.Item>
            <Footer.Nav.Item>Another One</Footer.Nav.Item>
        </Footer.Nav>
        <Footer.Nav>
            <Footer.Nav.Title>Nav Section Title</Footer.Nav.Title>
            <Footer.Nav.Item>Thing the First</Footer.Nav.Item>
            <Footer.Nav.Item>
                <OutboundLink
                    color="text"
                    href="https://google.com"
                    target="_blank"
                >
                    Second Doodad
                </OutboundLink>
            </Footer.Nav.Item>
            <Footer.Nav.Item>Another One</Footer.Nav.Item>
        </Footer.Nav>
        <Footer.Flavor>✨ Razzle Dazzle ✨</Footer.Flavor>
        <Footer.Copyright>Meme Lord</Footer.Copyright>
    </Footer>
);

export const Playground = Template.bind({});

Playground.args = {};
