import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MediaObjectCard } from './MediaObjectCard';
import { IceCream } from "lucide-react";
import { Button } from "@radix-ui/themes";

const meta = {
  component: MediaObjectCard,
} satisfies Meta<typeof MediaObjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/",
    mediaObject: <IceCream />,
    caption: "This is a",
    title: "Media Object",
    description: "It is a common format for presenting information.",
    action: <Button>Supports Actions!</Button>
  },
};