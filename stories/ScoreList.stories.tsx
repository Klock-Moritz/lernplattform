import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ScoreList } from './ScoreList';

const meta = {
  component: ScoreList,
} satisfies Meta<typeof ScoreList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "scores": {
      "role": 8,
      "format": 7,
      "content": 9,
      "creativity": 6,
      "qa": null
    }
  },
};