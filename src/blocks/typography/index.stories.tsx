import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Body } from "./body";
import { Caption } from "./caption";
import { Header } from "./header";
import { Label } from "./label";
import { Subheader } from "./subheader";
import { Text2 } from "./text";
import { Title } from "./title";

export default {
  argTypes: {
    children: {
      control: "text",
      defaultValue: "Click me!",
    },
  },
  component: Text2,
  title: `Blocks/Typography`,
} as ComponentMeta<typeof Text2>;

const Template: ComponentStory<typeof Text2> = (args) => <Text2 {...args} />;

export const Playground = Template.bind({});

Playground.args = {};

export const Presets = () => (
  <div>
    <Title heirarchy="1">
      Title: The quick brown fox jumps over the lazy dog
    </Title>
    <Header heirarchy="2">
      {" "}
      Header: The quick brown fox jumps over the lazy dog
    </Header>
    <Subheader heirarchy="3">
      SubHeader: The quick brown fox jumps over the lazy dog
    </Subheader>
    <Body>Body: The quick brown fox jumps over the lazy dog</Body>
    <Label>Label: The quick brown fox jumps over the lazy dog</Label>
    <Caption>Caption: The quick brown fox jumps over the lazy dog</Caption>
  </div>
);
