import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from ".";
import { AllTheProviders } from '@shared/lib/test-utils';

const meta: Meta<typeof Logo> = {
    component: Logo,
    decorators: [
        (Story) => (<AllTheProviders>
            <Story />
        </AllTheProviders>)
    ],
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const LogoStory: Story = {
    args: {
        children: 'Disclose LV'
    }
};