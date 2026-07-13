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