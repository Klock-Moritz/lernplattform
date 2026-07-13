import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CheckboxCircle } from './CheckboxCircle';

const meta = {
  component: CheckboxCircle,
} satisfies Meta<typeof CheckboxCircle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true
  }
};

export const Locked: Story = {
  args: {
    checked: true,
    locked: true
  }
};