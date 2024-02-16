import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';
import { AllProviders } from '@app/providers';

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story) => (
      <AllProviders>
        <Story />
      </AllProviders>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
  args: {
    children: 'Show more',
  },
};
