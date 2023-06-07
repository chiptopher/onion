import React from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
    faBoltLightning,
    faCopy,
    faGear,
} from '@fortawesome/free-solid-svg-icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MultiBlockChunk } from './chunk';

export default {
    argTypes: {
        children: {
            control: 'text',
            defaultValue:
                'Tailor your documents by incorporating custom branding into the header of all your minutes',
        },
        icon: {
            control: 'select',
            defaultValue: undefined,
            options: ['bolt', 'gear', 'copy'],
        },
        imageUrl: {
            control: 'text',
            defaultValue: undefined,
        },
        title: {
            control: 'text',
            defaultValue: 'Add your branding',
        },
    },
    component: MultiBlockChunk,
} as ComponentMeta<typeof MultiBlockChunk>;

const Template: ComponentStory<typeof MultiBlockChunk> = ({
    // @ts-ignore
    icon,
    ...args
}) => {
    const finalIcon = () => {
        if (icon === 'bolt') return faBoltLightning;
        if (icon === 'gear') return faGear;
        if (icon === 'copy') return faCopy;
        return undefined;
    };
    return <MultiBlockChunk {...{ ...args, icon: finalIcon() as IconProp }} />;
};

export const Playground = Template.bind({});

Playground.args = {};
