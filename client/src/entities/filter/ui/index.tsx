import { FilterBarContainer } from "./Filter.styled";
import { InputContainer } from "./InputContainer";

import { InputField } from "./InputField";
import { CheckBox } from "./Checkbox";


const dummyLabel: string[] = ['$', '$$', '$$$', '$$$$'];
const rating: string[] = ['Enter a rating'];

export const FilterBar = () => {
    return (
        <FilterBarContainer>
            <InputContainer filterTitle="Price:" children={
                <CheckBox
                    checkBoxLabel={dummyLabel}
                    inputType="checkbox"
                    inputName="price-checkbox"
                />
            } />
            {<InputContainer filterTitle="Ratings: " children={
                <InputField
                    inputLabel={rating}
                    inputType={'text'}
                    inputName={'rating-input'} />
            } />}
        </FilterBarContainer>
    );
};