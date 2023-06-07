import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from '.';

export default {
    argTypes: {},
    component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => (
    <Table {...args}>
        <Table.Header>
            <Table.Header.Cell width="100px">First</Table.Header.Cell>
            <Table.Header.Cell width="300px">Second</Table.Header.Cell>
            <Table.Header.Cell width="10%">Third</Table.Header.Cell>
            <Table.Header.Cell>Fourth</Table.Header.Cell>
        </Table.Header>
        <Table.Body>
            <Table.Body.Row>
                <Table.Body.Cell>Name</Table.Body.Cell>
                <Table.Body.Cell>Short</Table.Body.Cell>
                <Table.Body.Cell>Some medium length text</Table.Body.Cell>
                <Table.Body.Cell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi eros elit, finibus a bibendum efficitur, egestas
                    euismod ipsum. Nulla venenatis, odio id accumsan fermentum,
                    eros purus rhoncus diam, vitae faucibus magna lorem id
                    massa. Quisque quis iaculis erat, at sollicitudin tellus.
                    Vestibulum lacinia sit amet velit sit amet mattis. Quisque
                    dignissim commodo turpis, vitae luctus velit tristique sed.
                    Aenean tempor accumsan metus, nec sollicitudin lectus
                    rhoncus sit amet. Sed et felis tortor.
                </Table.Body.Cell>
            </Table.Body.Row>
            <Table.Body.Row>
                <Table.Body.Cell>Name</Table.Body.Cell>
                <Table.Body.Cell>Short</Table.Body.Cell>
                <Table.Body.Cell>Some medium length text</Table.Body.Cell>
                <Table.Body.Cell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi eros elit, finibus a bibendum efficitur, egestas
                    euismod ipsum. Nulla venenatis, odio id accumsan fermentum,
                    eros purus rhoncus diam, vitae faucibus magna lorem id
                    massa. Quisque quis iaculis erat, at sollicitudin tellus.
                    Vestibulum lacinia sit amet velit sit amet mattis. Quisque
                    dignissim commodo turpis, vitae luctus velit tristique sed.
                    Aenean tempor accumsan metus, nec sollicitudin lectus
                    rhoncus sit amet. Sed et felis tortor.
                </Table.Body.Cell>
            </Table.Body.Row>
            <Table.Body.Row>
                <Table.Body.Cell>Name</Table.Body.Cell>
                <Table.Body.Cell>Short</Table.Body.Cell>
                <Table.Body.Cell>Some medium length text</Table.Body.Cell>
                <Table.Body.Cell>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi eros elit, finibus a bibendum efficitur, egestas
                    euismod ipsum. Nulla venenatis, odio id accumsan fermentum,
                    eros purus rhoncus diam, vitae faucibus magna lorem id
                    massa. Quisque quis iaculis erat, at sollicitudin tellus.
                    Vestibulum lacinia sit amet velit sit amet mattis. Quisque
                    dignissim commodo turpis, vitae luctus velit tristique sed.
                    Aenean tempor accumsan metus, nec sollicitudin lectus
                    rhoncus sit amet. Sed et felis tortor.
                </Table.Body.Cell>
            </Table.Body.Row>
        </Table.Body>
    </Table>
);

export const Playground = Template.bind({});

Playground.args = {};
