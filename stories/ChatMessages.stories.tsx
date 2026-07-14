import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ChatMessages, defaultPartRenderers, toolCallPartRenderer } from './ChatMessages';

const meta = {
  component: ChatMessages,
} satisfies Meta<typeof ChatMessages>;

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
    error: new Error("Ein Fehler ist aufgetreten. Bitte versuche es erneut.")
  }
};

export const MultipleLines: Story = {
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
          { type: "text", text: "Mir geht es gut, danke!\r\n\r\nIch bin hier, um dir zu helfen!" }
        ]
      }
    ],
  }
};

export const ShowToolCalls: Story = {
  args: {
    partRenderers: defaultPartRenderers.concat(toolCallPartRenderer),
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
          { type: "text", text: "Mir geht es gut, danke!\r\n\r\nIch bin hier, um dir zu helfen! Ich generiere jetzt die erste Aufgabe." },
            {
            "type": "tool-generateTask",
            "toolCallId": "call_cd31b78a481b469cbf7d99ed",
            "state": "output-available",
            "input": {
              "level": "beginner",
              "currentScore": {
                "role": 0,
                "context": 0,
                "format": 0,
                "constraints": 0,
                "qa": 0
              },
              "userData": {
                "industry": null,
                "jobTitle": null
              },
              "completedTasksId": []
            },
            "output": {
              "id": "B1",
              "level": "beginner",
              "goal": "role",
              "scenario": "Du möchtest eine kurze E-Mail an Kolleg:innen verfassen (Thema: Terminabstimmung für ein Team-Meeting).",
              "task": "Formuliere einen Prompt, der der KI eine klare Rolle zuweist (z. B. ‚Du bist ein professioneller E-Mail-Assistent‘)."
            }
          }
        ]
      }
    ],
  }
};