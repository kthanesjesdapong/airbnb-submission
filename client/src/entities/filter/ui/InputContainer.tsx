import { ReactElement } from "react";
import { CheckBox } from "./Checkbox";

type CheckBoxProps = {
    filterTitle: string;
    // inputLabel: string[];
    // inputType: string;
    children: ReactElement;
};


export const InputContainer = ({ filterTitle, children }: CheckBoxProps) => {
    return (
        <div className="filter-wrapper">
            <h3>{filterTitle}</h3>
            {children}
        </div>
    );
};