import type { Preview } from '@storybook/nextjs-vite';
import { Theme, ThemePanel } from "@radix-ui/themes";
import '../app/globals.css';
import "@radix-ui/themes/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Theme accentColor='ruby' style={{minHeight: 0}} >
        <Story />
      </Theme>
    )
  ]
};

export default preview;