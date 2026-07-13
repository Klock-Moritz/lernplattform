import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { MediaObject } from './MediaObject';
import { IceCream } from "lucide-react";
import { Button } from '@radix-ui/themes';

const meta = {
  component: MediaObject,
} satisfies Meta<typeof MediaObject>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mediaObject: <IceCream />,
    caption: "This is a",
    title: "Media Object",
    description: "It is a common format for presenting information.",
    action: <Button>Supports Actions!</Button>
  },
};