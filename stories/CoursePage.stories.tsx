import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CoursePage } from './CoursePage';

const meta = {
  component: CoursePage,
} satisfies Meta<typeof CoursePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "KI-Führerschein",
    description: "Grundlagenkurs zur effektiven und reflektierten Nutzung von KI-Werkzeugen im Berufsalltag.",
    modules: [
      {
        href: "https://example.com",
        title: "Effektive Nutzung",
        description: "Wie nutze ich KI-Werkzeuge produktiv und sinnvoll im Arbeitsalltag?",
        completed: true,
      },
      {
        href: "https://example.com",
        title: "Reflektierte Nutzung",
        description: "Wie gehe ich kritisch und verantwortungsvoll mit KI-Ergebnissen um?",
        completed: false,
      }
    ]
  },
};

export const Completed: Story = {
  args: {
    title: "KI-Führerschein",
    description: "Grundlagenkurs zur effektiven und reflektierten Nutzung von KI-Werkzeugen im Berufsalltag.",
    modules: [
      {
        href: "https://example.com",
        title: "Effektive Nutzung",
        description: "Wie nutze ich KI-Werkzeuge produktiv und sinnvoll im Arbeitsalltag?",
        completed: true,
      },
      {
        href: "https://example.com",
        title: "Reflektierte Nutzung",
        description: "Wie gehe ich kritisch und verantwortungsvoll mit KI-Ergebnissen um?",
        completed: true,
      }
    ],
    completed: true,
  },
};