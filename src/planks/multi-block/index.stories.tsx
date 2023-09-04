import React from 'react';

import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MultiBlock } from '.';

export default {
    argTypes: {},
    component: MultiBlock,
} as ComponentMeta<typeof MultiBlock>;

const Template: ComponentStory<typeof MultiBlock> = args => (
    <MultiBlock {...args}>
        <MultiBlock.Chunk imageUrl="/matter.png" title="Title">
            Tailor your documents by incorporating custom branding into the
            header of all your minutes
        </MultiBlock.Chunk>
        <MultiBlock.Chunk
            icon={faBoltLightning}
            title="Title but this one is long"
        >
            Tailor your documents by incorporating custom branding into the
            header of all your minutes
        </MultiBlock.Chunk>
        <MultiBlock.Chunk imageUrl="/thread.png" title="Title">
            Tailor your documents by incorporating custom branding into the
        </MultiBlock.Chunk>
        <MultiBlock.Chunk imageUrl="/icon.svg" title="Title">
            Tailor your documents by incorporating custom branding into the
            header of all your minutes
        </MultiBlock.Chunk>
        <MultiBlock.Chunk imageUrl="/icon.svg" title="Title">
            Tailor your documents by incorporating custom branding into the
            header of all your minutes
        </MultiBlock.Chunk>
    </MultiBlock>
);

export const Playground = Template.bind({});

Playground.args = {};
