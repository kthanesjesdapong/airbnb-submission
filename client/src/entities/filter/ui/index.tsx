
import { ChangeEventHandler } from "react";
import { FilterBarContainer } from "./Filter.styled";
import { InputContainer } from "./InputContainer";

import { InputField } from "./InputField";
import { CheckBox } from "./Checkbox";

import { priceLabels, ratingPrompt } from "..";

type FilterBarProps = {
    checkBoxCallBack: (value: string[]) => void;
    inputFieldCallBack: ChangeEventHandler<HTMLInputElement>;
};


export const FilterBar = ({ checkBoxCallBack, inputFieldCallBack }: FilterBarProps) => {

    return (
        <FilterBarContainer>
            <InputContainer filterTitle="Filter By Prices:" children={
                <CheckBox
                    checkBoxLabel={priceLabels}
                    inputType="checkbox"
                    inputName="price-checkbox"
                    callBackFn={checkBoxCallBack}
                />
            } />
            {<InputContainer filterTitle="Filter By Rating: " children={
                <InputField
                    inputLabel={ratingPrompt}
                    inputType={'text'}
                    inputName={'rating-input'}
                    callBackFn={inputFieldCallBack}
                />
            } />}
        </FilterBarContainer>
    );
};