
import { ChangeEventHandler } from "react";
import { FilterBarContainer, FilterButton } from "./Filter.styled";
import { InputContainer } from "./InputContainer";

import { useToggle, useWindowDimensions } from "@shared/lib/hooks";

import { InputField } from "./InputField";
import { CheckBox } from "./Checkbox";

import { priceLabels, ratingPrompt } from "..";



type FilterBarProps = {
    checkBoxCallBack: (value: string[]) => void;
    inputFieldCallBack: ChangeEventHandler<HTMLInputElement>;
};

export const FilterBar = ({ checkBoxCallBack, inputFieldCallBack }: FilterBarProps) => {

    const { width } = useWindowDimensions();
    const { status: active, toggleStatus: toggleActive } = useToggle();

    return (
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
                className={active || width >= 1024 ? 'expanded' : 'collapsed'}
                currentWindowWidth={width}
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
                currentWindowWidth={width}
                className={active || width >= 1024 ? 'expanded' : 'collapsed'}
                children={
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