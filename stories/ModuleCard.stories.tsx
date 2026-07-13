import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ModuleCard } from './ModuleCard';

const meta = {
  component: ModuleCard,
} satisfies Meta<typeof ModuleCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "https://example.com",
    title: "Effektive Nutzung",
    description: "Wie nutze ich KI-Werkzeuge produktiv und sinnvoll im Arbeitsalltag?",
    type: "Modul",
    index: 1,
    completed: false
  },
};

export const Completed: Story = {
  args: {
    href: "https://example.com",
    title: "Reflektive Nutzung",
    description: "Wie gehe ich kritisch und verantwortungsvoll mit KI-Ergebnissen um?",
    type: "Modul",
    index: 2,
    completed: true
  }
};

export const Locked: Story = {
  args: {
    href: "https://example.com",
    title: "Einführung in generative KI",
    description: "",
    type: "Lerneinheit",
    index: 1,
    completed: false,
    locked: true
  }
};