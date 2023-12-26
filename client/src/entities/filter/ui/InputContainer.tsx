import { ReactElement } from "react";

type CheckBoxProps = {
    filterTitle: string;
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