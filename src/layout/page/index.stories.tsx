import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Page } from '.';

export default {
    component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = () => (
    <Page
        footer={<footer>Footer</footer>}
        header={
            <header>
                <h1>header</h1>
            </header>
        }
    >
        Hello World
    </Page>
);

export const Playground = Template.bind({});

Playground.args = {};
