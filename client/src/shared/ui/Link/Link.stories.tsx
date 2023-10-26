import type { Meta, StoryObj } from '@storybook/react';
import { LinkElement } from "@shared/ui";
import { AllTheProviders } from '@shared/lib/test-utils';


const meta: Meta<typeof LinkElement> = {
    component: LinkElement,
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
type Story = StoryObj<typeof LinkElement>;


export const LinkElementStory: Story = {
    args: {
        to: './about',
        children: 'link text'
    }
};