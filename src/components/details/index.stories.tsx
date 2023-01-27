import React from 'react';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Details } from '.';

export default {
    component: Details,
    title: `Components/Details`,
} as ComponentMeta<typeof Details>;

const Template: ComponentStory<typeof Details> = args => (
    <>
        <Details indicator={<FontAwesomeIcon icon={faChevronRight} />}>
            <Details.Summary tagName="h2">Title</Details.Summary>
            <Details.Body>Body</Details.Body>
        </Details>
        <Details initialOpen>
            <Details.Summary tagName="span" textStyle="label">
                Title
            </Details.Summary>
            <Details.Body>Body</Details.Body>
        </Details>
    </>
);

export const Example = Template.bind({});

Example.args = {};
