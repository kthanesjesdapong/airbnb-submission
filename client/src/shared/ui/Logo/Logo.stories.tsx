import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from ".";
import { AllProviders } from '@app/providers';

const meta: Meta<typeof Logo> = {
    component: Logo,
    decorators: [
        (Story) =>
        (
            <AllProviders>
                <Story />
            </AllProviders>
        )
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