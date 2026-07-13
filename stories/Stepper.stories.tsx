import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Stepper } from './Stepper';

const meta = {
  component: Stepper,
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stepCount: 4,
    currentStep: 2
  },
};