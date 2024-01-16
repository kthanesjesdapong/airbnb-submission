import React, { FormEvent } from "react";

import { StyledUserActionForm, StyledInputError, StyledButton, StyledInput, StyledLabel } from "./UserActionForm.styled";
import { LabelInput } from "..";
import { formatErrors } from "@shared/lib";
import { Spinner } from "@shared/ui";


type UserActionFormProps = {
  callBack: (event: FormEvent<HTMLFormElement>) => void;
  labelInputs: LabelInput[];
  buttonRoles: string[];
  isActiveStr: string;
  setSignUpAsActive?: () => void;

  isLoading: boolean;
  errors: string;
  status: string;
};

export const UserActionForm = ({ callBack, labelInputs, buttonRoles, isActiveStr, setSignUpAsActive, isLoading, errors, status }: UserActionFormProps) => {

  const formattedErrors = formatErrors(errors);
  // console.log({ status });
  // if (status === 'success') console.log({ token }, 'LINE 26 USERACTIONFORM');


  return (

    <StyledUserActionForm onSubmit={callBack} $active={isActiveStr}>
      {labelInputs.map(({ inputName, labelTitle, inputType }, i) =>
      (
        formattedErrors && formattedErrors[inputName] !== undefined ? (
          <React.Fragment key={`${labelTitle} fragment error`}>
            <StyledLabel key={`${labelTitle} label ${i}`}>{labelTitle}</StyledLabel>
            <StyledInput key={`${inputName} input ${i}`} type={inputType} name={inputName} />
            <StyledInputError key={`${inputName} ${i} INPUT ERROR ${formattedErrors[inputName]}`}>{formattedErrors[inputName]}</StyledInputError>
          </React.Fragment>

        ) : (
          <React.Fragment key={`${labelTitle} fragment`}>
            <StyledLabel key={`${labelTitle} label ${i}`}>{labelTitle}</StyledLabel>
            <StyledInput key={`${inputName} input ${i}`} type={inputType} name={inputName} />
          </React.Fragment>

        )
      )
      )}

      {isLoading ? (
        <Spinner
          width={'30px'}
          height={'30px'}

        />

      ) : (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          {buttonRoles.map((buttonRole, i) => (
            buttonRole === 'signup' ? (
              <StyledButton type='submit' role={buttonRole}
                key={buttonRole + ' ' + i + 'signup'}
                onClick={setSignUpAsActive}
              >{buttonRole.toUpperCase()}</StyledButton>
            ) : (
              <StyledButton type='submit' role={buttonRole}
                key={buttonRole + ' ' + i}

              >{buttonRole.toUpperCase()}</StyledButton>

            )

          ))}
        </div>
      )}
    </StyledUserActionForm>
  );
};