import type { Meta, StoryObj } from '@storybook/react';
import { LinkElement } from ".";
import { AllProviders } from '@app/providers';


const meta: Meta<typeof LinkElement> = {
    component: LinkElement,
    decorators: [
        (Story) => (
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
type Story = StoryObj<typeof LinkElement>;


export const LinkElementStory: Story = {
    args: {
        to: './',
        children: 'link text'
    }
};