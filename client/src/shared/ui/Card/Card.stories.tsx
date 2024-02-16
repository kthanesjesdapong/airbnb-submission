import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';
import { AllProviders } from '@app/providers';

const meta: Meta<typeof Card> = {
  component: Card,
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
type Story = StoryObj<typeof Card>;

export const CardStory: Story = {
  args: {
    $width: 450,
    $height: 350,
  },
};
