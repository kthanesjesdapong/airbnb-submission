
import { ChangeEventHandler, useState } from "react";
import { FilterBarContainer, FilterButton } from "./Filter.styled";
import { InputContainer } from "./InputContainer";

import { MobileFilter } from "./MobileFilter";

import { InputField } from "./InputField";
import { CheckBox } from "./Checkbox";

import { priceLabels, ratingPrompt } from "..";

type FilterBarProps = {
    checkBoxCallBack: (value: string[]) => void;
    inputFieldCallBack: ChangeEventHandler<HTMLInputElement>;
};

type HandleMobile = () => void;


export const FilterBar = ({ checkBoxCallBack, inputFieldCallBack }: FilterBarProps) => {

    const [toggleMobile, setToggleMobile] = useState<boolean>(false);

    const handleMobile: HandleMobile = () => {
        setToggleMobile(!toggleMobile);
    };



    return (<>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <FilterButton onClick={handleMobile} style={{ marginBottom: '1em', zIndex: 2 }}>FILTER</FilterButton>
        </div>
        <MobileFilter show={toggleMobile}>
            <InputContainer filterTitle="Filter By Prices:" children={
                <CheckBox
                    checkBoxLabel={priceLabels}
                    inputType="checkbox"
                    inputName="price-checkbox"
                    callBackFn={checkBoxCallBack}
                />
            } />
            <InputContainer filterTitle="Filter By Rating: " children={
                <InputField
                    inputLabel={ratingPrompt}
                    inputType={'text'}
                    inputName={'rating-input'}
                    callBackFn={inputFieldCallBack}
                />
            } />
        </MobileFilter>

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
    </>
    );
};