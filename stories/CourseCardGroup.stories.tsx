import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CourseCardGroup } from './CourseCardGroup';

const meta = {
  component: CourseCardGroup,
} satisfies Meta<typeof CourseCardGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    courses: [
      {
        href: "/",
        title: "KI-Führerschein",
        description: "Grundlagenkurs zur effektiven und reflektierten Nutzung von KI-Werkezugen im Berufsalltag.",
        totalModules: 2,
        completedModules: 2
      },
      {
        href: "/",
        title: "Entwicklung",
        description: "Für Arbeitgeber & Führungskräfte, die KI-Systeme entwickeln oder beauftragen.",
        totalModules: 3,
        completedModules: 1
      },
      {
        href: "/",
        title: "Einführung",
        description: "Für Führungskräfe & HR, die KI im Unternehmen einführen und Change-Prozesse begleiten.",
        totalModules: 2,
        completedModules: 0
      },
    ]
  },
};