type InputFieldProps = {
  inputLabel: string[];
  inputType: string;
  inputName: string;
};

export const InputField = ({ inputLabel, inputType, inputName }: InputFieldProps) => {
  return (
    <div className="input-container">
      <input type={inputType} name={inputName} />
      <label htmlFor={inputLabel[0]}>{inputLabel}</label>
    </div>
  );
};
