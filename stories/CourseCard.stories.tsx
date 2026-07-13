import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CourseCard } from './CourseCard';

const meta = {
  component: CourseCard,
} satisfies Meta<typeof CourseCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "KI-Führerschein",
    description: "Grundlagenkurs zur effektiven und reflektierten Nutzung von KI-Werkezugen im Berufsalltag.",
    totalModules: 2,
    completedModules: 0
  },
};

export const Completed: Story = {
  args: {
    title: "KI-Führerschein",
    description: "Grundlagenkurs zur effektiven und reflektierten Nutzung von KI-Werkezugen im Berufsalltag.",
    totalModules: 2,
    completedModules: 2
  }
};