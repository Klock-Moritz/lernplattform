import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Header } from './Header';

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    homepageHref: "https://menschki.org/",
    links: [
      {
        href: "/courses",
        title: "Lernplattform",
        selected: true,
      },
      {
        href: "/settings",
        title: "Über MenschKI!"
      },
      {
        href: "/admin",
        title: "Blog"
      },
      {
        href: "/admin",
        title: "Ergebnisse"
      },
      {
        href: "/admin",
        title: "Publikationen"
      },
      {
        href: "/admin",
        title: "Kontakt"
      },
    ]
  },
};