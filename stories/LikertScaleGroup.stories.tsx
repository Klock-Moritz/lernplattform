import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { LikertScaleGroup } from './LikertScaleGroup';
import { fn } from 'storybook/test';

const meta = {
  component: LikertScaleGroup,
  args: {
    onUpdate: fn(),
  }
} satisfies Meta<typeof LikertScaleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: {
      first: null,
      second: null,
      third: null,
    },
    minValue: 0,
    maxValue: 10,
  },
};

export const DefaultValue: Story = {
  args: {
    defaultValue: {
      first: 5,
      second: 8,
      third: 2,
    },
    minValue: 0,
    maxValue: 10,
  },
};

export const TranslationFunction: Story = {
  args: {
    defaultValue: {
      first: null,
      second: null,
      third: null,
    },
    minValue: 0,
    maxValue: 10,
    translationFunction: key => key.toUpperCase(),
  },
};