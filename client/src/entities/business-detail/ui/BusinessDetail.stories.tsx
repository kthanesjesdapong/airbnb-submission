import type { Meta, StoryObj } from '@storybook/react';
import { BusinessDetail } from '.';
import { AllProviders } from '@app/providers';

const meta: Meta<typeof BusinessDetail> = {
    component: BusinessDetail,
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

type Story = StoryObj<typeof BusinessDetail>;

export const BusinessDetailStory: Story = {
    args: {

    }
};