import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Section } from '.';
import { Body, Button, Heading } from '../../';

export default {
    argTypes: {},
    component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = args => (
    <Section {...args}>
        <Section.Header>
            <Heading heirarchy="2">Lorem ipsum dolor sit amet</Heading>
            <Section.Action>
                <Button>Click Me</Button>
            </Section.Action>
        </Section.Header>
        <Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            elit risus, dapibus sit amet imperdiet vel, bibendum at leo.
            Phasellus suscipit velit lectus, suscipit molestie eros venenatis
            vitae. In vitae convallis arcu. Praesent fringilla felis vitae mi
            porta, sed imperdiet quam luctus. Fusce pellentesque, ante commodo
            pulvinar volutpat, nunc neque consequat felis, posuere sagittis
            augue leo eget erat.
        </Body>
    </Section>
);

export const Playground = Template.bind({});

Playground.args = {};
