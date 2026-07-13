import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Chat } from './Chat';
import { fn } from 'storybook/test';

const meta = {
  component: Chat,
} satisfies Meta<typeof Chat>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    messages: [
      {
        id: "1",
        role: "user",
        parts: [
          { type: "text", text: "Hallo, wie geht es dir?" }
        ]
      },
      {
        id: "2",
        role: "assistant",
        parts: [
          { type: "text", text: "Mir geht es gut, danke! Wie kann ich dir helfen?" }
        ]
      },
      {
        id: "3",
        role: "user",
        parts: [
          { type: "text", text: "Ich möchte mehr über KI lernen." }
        ]
      },
      {
        id: "4",
        role: "assistant",
        parts: [
          { type: "text", text: "Das ist großartig! KI ist ein spannendes Feld. Welche Aspekte interessieren dich besonders?" },
          { type: "text", text: "Möchtest du über maschinelles Lernen, neuronale Netze oder etwas anderes erfahren?" }
        ]
      },
    ],
    sendMessage: fn(),
  }
};

export const LongText: Story = {
  args: {
    className: "max-h-96",
    messages: [
      {
        id: "1",
        role: "user",
        parts: [
          { type: "text", text: "Hallo, wie geht es dir?" }
        ]
      },
      {
        id: "2",
        role: "assistant",
        parts: [
          { type: "text", text: "Mir geht es gut, danke! Wie kann ich dir helfen?" }
        ]
      },
      {
        id: "3",
        role: "user",
        parts: [
          { type: "text", text: "Ich möchte mehr über KI lernen." }
        ]
      },
      {
        id: "4",
        role: "assistant",
        parts: [
          { type: "text", text: "Das ist großartig! KI ist ein spannendes Feld. Welche Aspekte interessieren dich besonders?" },
          { type: "text", text: "Möchtest du über maschinelles Lernen, neuronale Netze oder etwas anderes erfahren?" }
        ]
      },
      {
        id: "5",
        role: "assistant",
        parts: [
          { type: "text", text: "Hier ist ein längerer Text, der die Fähigkeiten des Chat-Interfaces demonstriert. KI hat viele Facetten, darunter maschinelles Lernen, neuronale Netze, natürliche Sprachverarbeitung und vieles mehr. Es gibt zahlreiche Anwendungsbereiche, von der Bild- und Spracherkennung bis hin zu autonomen Systemen und personalisierten Empfehlungen. Wenn du tiefer in die Materie eintauchen möchtest, können wir uns auf spezifische Themen konzentrieren und diese im Detail besprechen." }
        ]
      }
    ],
    sendMessage: fn(),
  }
};