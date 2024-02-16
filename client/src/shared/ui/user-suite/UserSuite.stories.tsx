import type { Meta, StoryObj } from '@storybook/react';
import { UserSuite } from '.';
import { AllProviders } from '@app/providers';

const meta: Meta<typeof UserSuite> = {
  component: UserSuite,
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
type Story = StoryObj<typeof UserSuite>;

export const UserSuiteStory: Story = {
  args: {
    imgUrl:
      'https://ih1.redbubble.net/image.5184662015.9367/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.webp',
    userName: 'astroboy',
    imgHeight: '35px',
    imgWidth: '35px',
  },
};
