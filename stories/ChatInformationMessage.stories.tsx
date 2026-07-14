import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ChatInformationMessage } from './ChatInformationMessage';

const meta = {
  component: ChatInformationMessage,
} satisfies Meta<typeof ChatInformationMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "This is an information message. Click to expand for more details.",
    children: (
      <div>
        <p>This is the expanded content of the information message.</p>
        <p>You can put any React nodes here, including text, images, or other components.</p>
      </div>
    ),
  },
};