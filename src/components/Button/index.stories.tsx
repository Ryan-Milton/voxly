import { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Feedback",
  },
};
