import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loading } from '.';
import { Block } from '../../atoms/block';
import { Button } from '../button';
import { useLoading } from './contex';

export default {
    component: Loading,
    title: `Blocks/Loading`,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = args => (
    <>
        <Block marginBottom="1">
            <Loading>
                <Toggle>
                    <Loading.Spinner>Not Loading</Loading.Spinner>
                </Toggle>
            </Loading>
        </Block>
        <div>
            <Loading>
                <Toggle>
                    <Loading.Text>Not Loading</Loading.Text>
                </Toggle>
            </Loading>
        </div>
    </>
);

export const Playground = Template.bind({});

Playground.args = {};

const Toggle = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useLoading();
    return <Button onClick={() => setLoading(!loading)}>{children}</Button>;
};
