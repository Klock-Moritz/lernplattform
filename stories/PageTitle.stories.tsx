import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { PageTitle } from './PageTitle';

const meta = {
  component: PageTitle,
} satisfies Meta<typeof PageTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "title": "title",
    title: "Seitentitel",
    description: "Hier steht die Beschreibung der Seite",
    backHref: "/",
    backHrefTitle: "Zurück zur Startseite"
  },
};