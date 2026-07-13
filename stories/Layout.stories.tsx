import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Layout } from './Layout';

const meta = {
  component: Layout,
  parameters: {
    layout: "fullscreen"
  },
  args: {
    children: (
      <>
        <h1>Lorem Ipsum</h1>

        <p>
          <strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur adipiscing elit</em>. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Visit <a href="https://example.com">this example link</a> for more information.
        </p>

        <h2>Section One</h2>

        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          This sentence contains <code>inline code</code>, <mark>highlighted text</mark>, <small>small text</small>, and
          H<sub>2</sub>O with E = mc<sup>2</sup>.
        </p>

        <ul>
          <li>First unordered item</li>
          <li>Second unordered item with <strong>bold</strong> text</li>
          <li>Third unordered item with <a href="#section-two">an internal link</a></li>
        </ul>

        <h2 id="section-two">Section Two</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          <abbr title="HyperText Markup Language">HTML</abbr> and
          <abbr title="Cascading Style Sheets">CSS</abbr> are commonly used together.
        </p>

        <ol>
          <li>First ordered item</li>
          <li>Second ordered item
            <ul>
              <li>Nested item one</li>
              <li>Nested item two</li>
            </ul>
          </li>
          <li>Third ordered item</li>
        </ol>

        <h3>Block Elements</h3>

        <blockquote cite="https://example.com">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </blockquote>

        <p>
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          <del>Deleted text</del> and <ins>inserted text</ins> appear here for illustration.
        </p>

        <hr />

        <h2>Summary</h2>

        <p>
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.
          At vero eos et accusam et justo duo dolores et ea rebum.
          <span lang="la">Lorem ipsum dolor sit amet</span> concludes this example.
        </p>

        <dl>
          <dt>Lorem</dt>
          <dd>Dolor sit amet, consectetur adipiscing elit.</dd>

          <dt>Ipsum</dt>
          <dd>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
        </dl>

        <p>
          <a href="mailto:example@example.com">Email us</a> |
          <a href="tel:+1234567890">Call us</a> |
          <a href="https://example.com/contact" rel="noopener noreferrer">Contact page</a>
        </p>
      </>
    )
  },
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Selbsteinschätzung",

    stepCount: 4,
    currentStep: 2,
  },
};

export const TextContent: Story = {
  args: {
    title: "Selbsteinschätzung",

    stepCount: 4,
    currentStep: 2,

    sideContent: `# Willkommen!

Damit wir die Inhalte optimal auf Sie zuschneiden können,
würden wir uns über einige Informationen über Sie freuen.

__Hinweis:__ Geben Sie weder personenbezogene noch
unternehmensinterne Daten in das Tool ein.  Die Angaben sind
freiwillig.  Ihre Daten werden nicht gespeichert.`,
  },
};

export const TopPlacement: Story = {
  args: {
    title: "Selbsteinschätzung",

    stepCount: 4,
    currentStep: 2,
    sideContentPlacement: "top",

    sideContent: `# Willkommen!

Damit wir die Inhalte optimal auf Sie zuschneiden können,
würden wir uns über einige Informationen über Sie freuen.

__Hinweis:__ Geben Sie weder personenbezogene noch
unternehmensinterne Daten in das Tool ein.  Die Angaben sind
freiwillig.  Ihre Daten werden nicht gespeichert.`,
  },
};