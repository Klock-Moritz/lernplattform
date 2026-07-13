import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { LabelledInput } from './LabelledInput';

const meta = {
  component: LabelledInput,
} satisfies Meta<typeof LabelledInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "label": "label"
  },
};