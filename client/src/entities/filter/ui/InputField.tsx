import { ChangeEventHandler } from "react";

type InputFieldProps = {
  inputLabel: string[];
  inputType: string;
  inputName: string;
  callBackFn: ChangeEventHandler<HTMLInputElement>;
  active?: boolean;
};

//Might Have to set show state in here
export const InputField = ({ inputLabel, inputType, inputName, callBackFn, active }: InputFieldProps) => {
  return (
    <div style={{ display: active ? 'block' : 'none', height: active ? 'auto' : '0', opacity: active ? '1' : '0' }}>
      <div className="input-container input--field" >
        <input type={inputType} name={inputName} onChange={callBackFn} maxLength={1} />
        <label htmlFor={inputLabel[0]}>{inputLabel}</label>
      </div>
    </div>
  );
};
