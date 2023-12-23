type CheckBoxProps = {
    checkBoxLabel: string[];
    inputType: string;
    inputName: string;
};


export const CheckBox = ({ checkBoxLabel, inputType, inputName }: CheckBoxProps) => {
    return (
        <>
            {checkBoxLabel.map((label, i) => (
                <div className="input-container" key={label + ' ' + i}>
                    <input type={inputType} name={inputName} />
                    <label htmlFor={inputName}>
                        {label}
                    </label>
                </div>
            ))}
        </>
    );
};
