import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Headline } from '.';
import { ColorsOptions } from '../../atoms/colors';

export default {
    argTypes: {
        background: {
            control: {
                // @ts-ignore
                options: [undefined].concat(ColorsOptions),
                type: 'select',
            },
        },
        contentText: {
            control: 'text',
            defaultValue:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur rhoncus imperdiet. Cras varius diam ac elit vehicula varius. Pellentesque',
        },

        ctaText: {
            control: 'text',
            defaultValue: 'Lorem ipsum',
        },
        gutterSize: {
            control: 'select',
            options: ['none', 'regular', 'large'],
        },
        title: {
            control: 'text',
            defaultValue: 'Lorem ipsum dolor',
        },
        withHref: {
            control: 'boolean',
            defaultValue: true,
        },
    },
    component: Headline,
} as ComponentMeta<typeof Headline>;

const Template: ComponentStory<any> = ({
    contentText,
    ctaText,
    withHref,
    ...args
}) => (
    <Headline {...args}>
        <Headline.Content>{contentText}</Headline.Content>
        <Headline.CTA href={withHref ? 'https://google.com' : undefined}>
            {ctaText}
        </Headline.CTA>
    </Headline>
);

export const Playground = Template.bind({});

Playground.args = {};
