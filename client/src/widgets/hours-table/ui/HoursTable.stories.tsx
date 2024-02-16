import type { Meta, StoryObj } from '@storybook/react';
import { HoursTable } from '.';
import { AllProviders } from '@app/providers';

const meta: Meta<typeof HoursTable> = {
  component: HoursTable,
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

type Story = StoryObj<typeof HoursTable>;

export const HoursTableStory: Story = {
  args: {
    width: 500,
    margin: '0.5em 0 2em',
    currentDay: 0,
    currentTime: '1927',
    hours: [
      [0, '1000', '1500'],
      [0, '1700', '2200'],
      [1, '1000', '1500'],
      [1, '1700', '2200'],
      [2, '1000', '1500'],
      [2, '1700', '2200'],
      [3, '1000', '1500'],
      [3, '1700', '2200'],
      [4, '1000', '1500'],
      [4, '1700', '2200'],
      [5, '1000', '1500'],
      [5, '1700', '2200'],
    ],
  },
};
