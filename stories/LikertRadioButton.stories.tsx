import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { LikertRadioButton } from './LikertRadioButton';
import { RadioGroup } from 'radix-ui';

const meta = {
  component: LikertRadioButton,
  decorators: [
    (Story) => (
      <RadioGroup.Root defaultValue='9'>
        <Story />
      </RadioGroup.Root>
    )
  ]
} satisfies Meta<typeof LikertRadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "10"
  }
};

export const Checked: Story = {
  args: {
    value: "9",
  }
};