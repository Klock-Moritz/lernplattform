import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ChatMessage } from './ChatMessage';

const meta = {
  component: ChatMessage,
} satisfies Meta<typeof ChatMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MyMessage: Story = {
  args: {
    type: "me",
    children: "### Antrag gestellt\n\nIch habe den Zugriff auf **Tool A** und **Tool B** beantragt.\n\n- Bitte zuerst freigeben\n- Dann die Freischaltung bestätigen",
  },
};

export const OtherMessage: Story = {
  args: {
    type: "other",
    children: "Der Antrag ist eingegangen. Bitte prüfen Sie noch einmal die **Abteilung** und den gewünschten *Starttermin*.",
  },
};

export const SystemMessage: Story = {
  args: {
    type: "system",
    children: "Unexpected error occurred. Please try again later.",
  }
};