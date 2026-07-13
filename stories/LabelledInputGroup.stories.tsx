import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';

import { LabelledInputGroup } from './LabelledInputGroup';

const meta = {
  component: LabelledInputGroup,
  args: {
    onUpdate: fn(),
  }
} satisfies Meta<typeof LabelledInputGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: {
      first: null,
      second: null,
      third: null,
    },
  },
};

export const DefaultValue: Story = {
  args: {
    defaultValue: {
      first: "Hello,",
      second: "World!",
      third: "Lorem ipsum dolor sit amet",
    },
  },
};

export const TranslationFunction: Story = {
  args: {
    defaultValue: {
      first: null,
      second: null,
      third: null,
    },
    translationFunction: key => key.toUpperCase(),
  },
};