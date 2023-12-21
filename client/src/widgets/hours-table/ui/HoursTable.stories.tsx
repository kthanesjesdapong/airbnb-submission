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
        )
    ],
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
};

export default meta;

type Story = StoryObj<typeof HoursTable>;

export const HoursTableStory: Story = {
    args: {
        width: 300,
        $margin: '0.5em 0 2em'
    }
};