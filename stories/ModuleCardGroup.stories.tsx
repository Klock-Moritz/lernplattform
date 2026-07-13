import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ModuleCardGroup } from './ModuleCardGroup';

const meta = {
  component: ModuleCardGroup,
} satisfies Meta<typeof ModuleCardGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "Lerneinheit",
    items: [
      {
        href: "https://example.com",
        title: "Einführung in generative KI",
        completed: true,
      },
      {
        href: "https://example.com",
        title: "Wofür eignet sich KI - und wofür nicht?",
      },
      {
        href: "https://example.com",
        title: "Grundlagen des Prompting",
        locked: true,
      },
      {
        href: "https://example.com",
        title: "Prompts verbessern",
        locked: true,
      },
    ]
  },
};