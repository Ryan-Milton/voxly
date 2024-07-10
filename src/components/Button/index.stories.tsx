import type { Meta, StoryObj } from "@storybook/react";
import Feedback from ".";

const meta: Meta<typeof Feedback> = {
  title: "Components/Feedback",
  component: Feedback,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    variant: "button",
    label: "Feedback",
  },
};

export const Widget: Story = {
  args: {
    variant: "widget",
    label: "👋🏻",
  },
};

export const WidgetWithAnimation: Story = {
  args: {
    variant: "widget",
    label: "👋🏻",
    animation: "wave",
  },
};
