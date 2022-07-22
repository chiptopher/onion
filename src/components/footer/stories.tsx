import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Footer } from ".";

export default {
  argTypes: {
    children: {
      control: "text",
      defaultValue: "Click me!",
    },
  },
  component: Footer,
  title: `Components/Footer`,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <Footer>
    <Footer.Title>Meme</Footer.Title>
    <Footer.Nav>
      <Footer.Item>Thing the First</Footer.Item>
      <Footer.Item>Second Doodad</Footer.Item>
      <Footer.Item>Another One</Footer.Item>
    </Footer.Nav>
    <Footer.Flavor>✨ Razzle Dazzle ✨</Footer.Flavor>
    <Footer.Copyright>Meme Lord</Footer.Copyright>
  </Footer>
);

export const Playground = Template.bind({});

Playground.args = {};
