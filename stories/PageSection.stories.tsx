import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { PageSection } from './PageSection';

const meta = {
  component: PageSection,
} satisfies Meta<typeof PageSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Page Section Title",
    children: "Lorem ipsum dolor sit amet."
  }
};