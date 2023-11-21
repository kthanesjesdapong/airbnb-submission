import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';
import { AllTheProviders } from '@shared/lib/test-utils';

const meta: Meta<typeof Card> = {
    component: Card,
    decorators: [
        (Story) => (
            <AllTheProviders>
                <Story />
            </AllTheProviders>
        )
    ],
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const CardStory: Story = {
    args: {
        $width: 450,
        $height: 350
    }
};