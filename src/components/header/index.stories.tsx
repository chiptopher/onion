import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from ".";

export default {
  argTypes: {},
  component: Header,
  title: `Components/Header`,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <Header>
    <Header.Brand>Company Name</Header.Brand>
    <Header.Menu>
      <Header.NavContainer side="start">
        <Header.MenuItem>About</Header.MenuItem>
        <Header.MenuItem>Store</Header.MenuItem>
        <Header.MenuItem>Some Other Thing</Header.MenuItem>
      </Header.NavContainer>
      <Header.NavContainer side="end">
        <Header.MenuItem contrasting>Register</Header.MenuItem>
        <Header.MenuItem>Login</Header.MenuItem>
      </Header.NavContainer>
    </Header.Menu>
  </Header>
);

export const Playground = Template.bind({});

Playground.args = {};
