import type { Meta, StoryObj } from '@storybook/react';
import { InputContainer } from './InputContainer';
import { CheckBox } from './Checkbox';
import { AllProviders } from '@app/providers';
import { priceLabels } from '..';


const meta: Meta<typeof InputContainer> = {
    component: InputContainer,
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
type Story = StoryObj<typeof InputContainer>;

export const InputContainerStory: Story = {
    args: {
        filterTitle: 'Filter By Prices',
        children: <CheckBox
            checkBoxLabel={priceLabels}
            inputType='checkbox'
            inputName='price-checkbox'
            callBackFn={() => console.log('checked')}
        />
    }
};