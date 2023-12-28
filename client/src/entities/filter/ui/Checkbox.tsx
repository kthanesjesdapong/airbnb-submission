import { ChangeEventHandler, useEffect, useState } from "react";

type CheckBoxProps = {
    checkBoxLabel: string[];
    inputType: string;
    inputName: string;
    callBackFn: (value: string[]) => void;
    active?: boolean;
};


export const CheckBox = ({ checkBoxLabel, inputType, inputName, callBackFn, active }: CheckBoxProps) => {


    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const handleCheckBoxChange: ChangeEventHandler<HTMLInputElement> = event => {
        const value = event.currentTarget.value;
        const isChecked = event.currentTarget.checked;

        setSelectedValues((prevValues) => {
            if (isChecked) {
                return [...prevValues, value];
            } else {
                return prevValues.filter((val) => val !== value);
            }
        });
    };


    useEffect(() => {
        callBackFn(selectedValues);
    }, [selectedValues, callBackFn]);


    return (
        <div style={{ display: active ? 'block' : 'none', height: active ? 'auto' : '0', opacity: active ? '1' : '0' }}>
            {checkBoxLabel.map((label, i) => (
                <div className="input-container" key={label + ' ' + i}>
                    <input type={inputType} name={inputName} onChange={handleCheckBoxChange} value={label}

                    />
                    <label htmlFor={inputName}>
                        {label}
                    </label>
                </div>
            ))}
        </div>
    );
};
