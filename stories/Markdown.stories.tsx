import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Markdown } from './Markdown';

const meta = {
  component: Markdown,
} satisfies Meta<typeof Markdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `
# Überschrift 1

Dies ist ein Absatz mit **fettgedrucktem Text** und *kursivem Text*.

- Listelement 1
- Listelement 2
- Listelement 3

[Link zu OpenAI](https://www.openai.com)

\`\`\`javascript
// Codeblock in JavaScript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

> Dies ist ein Zitat.

---

## Überschrift 2

Ein Beispiel für eine Tabelle:

| Spalte 1 | Spalte 2 | Spalte 3 |
|----------|----------|----------|
| Wert 1   | Wert 2   | Wert 3   |
| Wert 4   | Wert 5   | Wert 6   |
    `,
  },
};