import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ModulePage } from './ModulePage';

const meta = {
  component: ModulePage,
} satisfies Meta<typeof ModulePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Effektive Nutzung",
    description: "Wie nutze ich KI-Werkzeuge produktiv und sinnvoll im Arbeitsalltag?",
    courseHref: "https://example.com",
    courseTitle: "KI-Führerschein",
    learningGoals: [
      "Verstehe, was generative KI ist und wofür sie geeignet ist",
      "Kann effektive Prompts formulieren",
      "Kennt typische berufliche Anwendungsfälle",
      "Kennt die Bedeutung von Datenschutz beim KI-Einsatz",
    ],
    stages: [
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
    ],
    selfEvaluationCompleted: true,
    sourcesAvailable: true,
  },
};

export const SelfEvaluationRequired: Story = {
  args: {
    title: "Effektive Nutzung",
    description: "Wie nutze ich KI-Werkzeuge produktiv und sinnvoll im Arbeitsalltag?",
    courseHref: "https://example.com",
    courseTitle: "KI-Führerschein",
    learningGoals: [
      "Verstehe, was generative KI ist und wofür sie geeignet ist",
      "Kann effektive Prompts formulieren",
      "Kennt typische berufliche Anwendungsfälle",
      "Kennt die Bedeutung von Datenschutz beim KI-Einsatz",
    ],
    stages: [
      {
        href: "https://example.com",
        title: "Einführung in generative KI",
        locked: true,
      },
      {
        href: "https://example.com",
        title: "Wofür eignet sich KI - und wofür nicht?",
        locked: true,
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

export const Completed: Story = {
  args: {
    title: "Effektive Nutzung",
    description: "Wie nutze ich KI-Werkzeuge produktiv und sinnvoll im Arbeitsalltag?",
    courseHref: "https://example.com",
    courseTitle: "KI-Führerschein",
    learningGoals: [
      "Verstehe, was generative KI ist und wofür sie geeignet ist",
      "Kann effektive Prompts formulieren",
      "Kennt typische berufliche Anwendungsfälle",
      "Kennt die Bedeutung von Datenschutz beim KI-Einsatz",
    ],
    stages: [
      {
        href: "https://example.com",
        title: "Einführung in generative KI",
        completed: true,
      },
      {
        href: "https://example.com",
        title: "Wofür eignet sich KI - und wofür nicht?",
        completed: true,
      },
      {
        href: "https://example.com",
        title: "Grundlagen des Prompting",
        completed: true,
      },
      {
        href: "https://example.com",
        title: "Prompts verbessern",
        completed: true,
      },
    ],
    selfEvaluationCompleted: true,
    sourcesAvailable: true,
    completed: true
  },
};