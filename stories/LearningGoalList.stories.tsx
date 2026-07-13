import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { LearningGoalList } from './LearningGoalList';

const meta = {
  component: LearningGoalList,
} satisfies Meta<typeof LearningGoalList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    learningGoals: [
      "Verstehe, was generative KI ist und wofür sie geeignet ist",
      "Kann effektive Prompts formulieren",
      "Kennt typische berufliche Anwendungsfälle",
      "Kennt die Bedeutung von Datenschutz beim KI-Einsatz",
      "Verstehe, was generative KI ist und wofür sie geeignet ist",
      "Kann effektive Prompts formulieren",
      "Kennt typische berufliche Anwendungsfälle",
      "Kennt die Bedeutung von Datenschutz beim KI-Einsatz",
      "Verstehe, was generative KI ist und wofür sie geeignet ist",
      "Kann effektive Prompts formulieren",
      "Kennt typische berufliche Anwendungsfälle",
      "Kennt die Bedeutung von Datenschutz beim KI-Einsatz",
    ]
  },
};