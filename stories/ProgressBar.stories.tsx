import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ProgressBar } from './ProgressBar';

const meta = {
  component: ProgressBar,
  args: {
    value: 0,
    max: 10,
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Halfway: Story = {
  args: {
    value: 5,
    max: 10,
  },
};