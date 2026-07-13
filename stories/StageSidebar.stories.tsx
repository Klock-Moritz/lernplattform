import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { StageSidebar } from './StageSidebar';

const meta = {
  component: StageSidebar,
} satisfies Meta<typeof StageSidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "title": "Reflektiert Prompten mit KI",
    "description": "Hier lernen Sie, wie Sie mit einem klaren Promptbaukasten arbeiten: Rolle, Aufgabe, Ziel, Kontext, und Format. Verbessern Sie Ihre Prompts mithilfe iterativer Aufgaben.",
    "level": "beginner",
    "scores": {
      "role": 8,
      "context": 7,
      "format": 9,
      "containts": 6,
      "qa": null
    },
    "learningObjectives": [
      "Reflektierter Umgang mit generativer Künstlicher Intelligenz",
      "Verständnis der Rolle von Prompts",
      "Erstellung von Prompts mit klarer Aufgabenstellung",
      "Verbesserung von Prompts durch iterative Aufgaben"
    ],
    "tasksCompleted": 5,
    "totalTasks": 10
  },
};