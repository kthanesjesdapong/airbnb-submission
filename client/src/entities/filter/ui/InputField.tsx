import { ChangeEventHandler, useEffect, useState } from "react";

type InputFieldProps = {
  inputLabel: string[];
  inputType: string;
  inputName: string;
  callBackFn: ChangeEventHandler<HTMLInputElement>;
};

export const InputField = ({ inputLabel, inputType, inputName, callBackFn }: InputFieldProps) => {
  return (
    <div className="input-container">
      <input type={inputType} name={inputName} onChange={callBackFn} maxLength={1} />
      <label htmlFor={inputLabel[0]}>{inputLabel}</label>
    </div>
  );
};
