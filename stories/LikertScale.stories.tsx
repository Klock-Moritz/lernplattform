import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { LikertScale } from './LikertScale';

const meta = {
  component: LikertScale,
} satisfies Meta<typeof LikertScale>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    minValue: 0,
    maxValue: 10
  },
};

export const WithLabel: Story = {
  args: {
    label: "Auf einer Skala von 0 bis 10, wie wahrscheinlich ist es, dass sie unser Produkt weiterempfehlen würden?",
    minValue: 0,
    maxValue: 10
  },
};