import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '.';
import { Button } from '..';

export default {
    component: ThemeProvider,
    title: `Theme/ThemeProvider`,
} as ComponentMeta<typeof ThemeProvider>;

const Template: ComponentStory<typeof ThemeProvider> = () => (
    <>
        <ThemeProvider
            themeOverride={{
                backgroundColor: {
                    primary: 'red',
                },
            }}
        >
            <Button color="primary">hello</Button>
        </ThemeProvider>
    </>
);

export const Playground = Template.bind({});

Playground.args = {};
