import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

import { ChatMessageField } from './ChatMessageField';

const meta = {
  component: ChatMessageField,
  args: {
    onChange: fn(),
    onSend: fn(),
  }
} satisfies Meta<typeof ChatMessageField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};