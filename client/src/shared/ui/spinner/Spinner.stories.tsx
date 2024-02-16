import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '.';
import { AllProviders } from '@app/providers';

const meta: Meta<typeof Spinner> = {
  component: Spinner,
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
type Story = StoryObj<typeof Spinner>;

export const SpinnerStory: Story = {
  args: {
    width: '30px',
    height: '30px',
  },
};
