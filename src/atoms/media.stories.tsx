import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import { breakpoint } from './breakpoints';
import { isGreaterThan, isLessThan } from './media';

const defaultBreakpoints = {
    desktop: breakpoint(801, 1024),
    mobile: breakpoint(0, 425),
    tablet: breakpoint(426, 800),
    wide: breakpoint(1441, Infinity),
};

const EDGES = ['lower', 'upper'];

export default {
    argTypes: {
        isGreaterThanBreakpoint: {
            control: {
                options: Object.keys(defaultBreakpoints),
                type: 'select',
            },
        },
        isGreaterThanEdge: {
            control: {
                options: EDGES,
                type: 'select',
            },
        },
        isLessThanBreakpoint: {
            control: {
                options: Object.keys(defaultBreakpoints),
                type: 'select',
            },
        },
        isLessThanEdge: {
            control: {
                options: EDGES,
                type: 'select',
            },
        },
    },
    component: () => <div />,
    title: `Atoms/media`,
} as ComponentMeta<any>;

function getPixesl(breakpoint: string, edge: string): number | undefined {
    const found = Object.entries(defaultBreakpoints).find(
        entry => entry[0] === breakpoint
    );
    if (!found) return undefined;
    return found[1][edge];
}

const Template: ComponentStory<any> = ({
    isLessThanEdge,
    isGreaterThanEdge,
    isLessThanBreakpoint,
    isGreaterThanBreakpoint,
}) => {
    const isGreaterThanPixels = getPixesl(
        isGreaterThanBreakpoint,
        isGreaterThanEdge
    );
    const isLessThanPixels = getPixesl(isLessThanBreakpoint, isLessThanEdge);

    return (
        <div>
            <LargerContainer px={isGreaterThanPixels}>
                isLargerThan {isGreaterThanPixels}
            </LargerContainer>
            <SmallerContainer px={isLessThanPixels}>
                isLessThan | {isLessThanPixels}
            </SmallerContainer>
        </div>
    );
};

const LargerContainer = styled.div<{ px: number | undefined }>`
    padding: 1rem;
    border: solid 1px black;
    margin-bottom: 1rem;

    ${p => p.px && isGreaterThan(p.px)} {
        color: red;
    }
`;

const SmallerContainer = styled.div<{ px: number | undefined }>`
    padding: 1rem;
    border: solid 1px black;
    margin-bottom: 1rem;

    ${p => p.px && isLessThan(p.px)} {
        color: red;
    }
`;

export const Playground = Template.bind({});

Playground.args = {};
