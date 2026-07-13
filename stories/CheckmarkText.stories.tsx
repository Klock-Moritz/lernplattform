import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CheckmarkText } from './CheckmarkText';

const meta = {
  component: CheckmarkText,
} satisfies Meta<typeof CheckmarkText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "children": "children",
    children: "Completed"
  },
};