import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { LinkCard } from './LinkCard';

const meta = {
  component: LinkCard,
} satisfies Meta<typeof LinkCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/",
    children: <div className='p-4'>Click me</div>,
  }
};

export const Disabled: Story = {
  args: {
    href: "/",
    children: <div className='p-4'>Click me</div>,
    disabled: true
  }
};