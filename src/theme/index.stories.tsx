import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeProvider } from '.';
import { Block, Button, Caption, Subheader } from '..';

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
                components: {
                    button: {
                        borderRadius: false,
                    },
                    typography: {
                        caption: {
                            fontFamily: 'IBM Plex Sans',
                        },
                        subheader: {
                            fontFamily: 'IBM Plex Sans',
                        },
                    },
                },
            }}
        >
            <Button color="primary">hello</Button>
            <Block marginBottom="1">
                <Caption>Lorem ipsum</Caption>
            </Block>
            <Block marginBottom="1">
                <Subheader heirarchy="2">Lorem ipsum</Subheader>
            </Block>
        </ThemeProvider>
    </>
);

export const Playground = Template.bind({});

Playground.args = {};
