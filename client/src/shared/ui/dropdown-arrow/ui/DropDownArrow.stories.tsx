import type { Meta, StoryObj } from '@storybook/react';
import { DropDownArrow } from './DropDownArrow.styled';
import { AllProviders } from '@app/providers';

const meta: Meta<typeof DropDownArrow> = {
    component: DropDownArrow,
    decorators: [
        (Story) => <AllProviders>
            <Story />
        </AllProviders>
    ],
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
};

export default meta;
type Story = StoryObj<typeof DropDownArrow>;

export const DropDownArrowStory: Story = {
    args: {
        width: '24px',
        display: 'inline-block',
        // active: 'active'
    }
};