import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loading } from ".";
import { Button } from "../button";
import { useLoading } from "./contex";

export default {
  component: Loading,
  title: `Blocks/Loading`,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args}>
    <Toggle>
      <Loading.Spinner>Not Loading</Loading.Spinner>
    </Toggle>
  </Loading>
);

export const Playground = Template.bind({});

Playground.args = {};

const Toggle = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useLoading();
  return <Button onClick={() => setLoading(!loading)}>{children}</Button>;
};
