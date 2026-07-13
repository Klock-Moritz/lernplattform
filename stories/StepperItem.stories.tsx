import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { StepperItem } from './StepperItem';

const meta = {
  component: StepperItem,
} satisfies Meta<typeof StepperItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "index": 0,
    "type": "finished",
    index: 1
  },
};

export const Current: Story = {
  args: {
    index: 2,
    type: "current"
  }
};

export const Next: Story = {
  args: {
    index: 3,
    type: "next"
  }
};