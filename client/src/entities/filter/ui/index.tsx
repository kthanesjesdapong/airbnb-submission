
import { ChangeEventHandler } from "react";
import { FilterBarContainer, FilterButton } from "./Filter.styled";
import { InputContainer } from "./InputContainer";

import { useToggle } from "@shared/lib/hooks";

import { InputField } from "./InputField";
import { CheckBox } from "./Checkbox";

import { priceLabels, ratingPrompt } from "..";

type FilterBarProps = {
    checkBoxCallBack: (value: string[]) => void;
    inputFieldCallBack: ChangeEventHandler<HTMLInputElement>;
};

export const FilterBar = ({ checkBoxCallBack, inputFieldCallBack }: FilterBarProps) => {

    const { status: active, toggleStatus: toggleActive } = useToggle();

    return (<>

        <FilterBarContainer >
            <FilterButton onClick={(e) => {
                e.preventDefault();
                toggleActive();
            }}
            >
                {'FILTER'}
            </FilterButton>
            <InputContainer filterTitle="Filter By Prices"
                dAWidth="20px"
                dADisplay="inline-block"
                inputContainerActive={active}
                children={
                    <CheckBox
                        checkBoxLabel={priceLabels}
                        inputType="checkbox"
                        inputName="price-checkbox"
                        callBackFn={checkBoxCallBack}
                    />
                } />
            {<InputContainer filterTitle="Filter By Rating"
                dAWidth="20px"
                dADisplay="inline-block"
                inputContainerActive={active}
                children={
                    <InputField

                        inputLabel={ratingPrompt}
                        inputType={'text'}
                        inputName={'rating-input'}
                        callBackFn={inputFieldCallBack}
                    />
                } />}
        </FilterBarContainer>
    </>
    );
};