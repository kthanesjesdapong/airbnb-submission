import { FormEvent } from "react";
import { StyledUserActionForm, StyledButton } from "./UserActionForm.styled";
import { UserLabelInput } from "./UserLabelInput";
import { LabelInput } from "..";



type UserActionFormProps = {
  callBack: (event: FormEvent<HTMLFormElement>) => void;
  labelInputs: LabelInput[];
  buttonRoles: string[];
  isActiveStr: string;
  setSignUpAsActive?: () => void;
};

export const UserActionForm = ({ callBack, labelInputs, buttonRoles, isActiveStr, setSignUpAsActive }: UserActionFormProps) => {


  return (

    <StyledUserActionForm onSubmit={callBack} $active={isActiveStr}>
      {labelInputs.map(({ inputName, labelTitle, inputType }, i) => (

        <UserLabelInput
          key={`${inputName} ${i}`}
          labelTitle={labelTitle}
          inputType={inputType}
          inputName={inputName} />
      ))}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

        {buttonRoles.map((buttonRole, i) => (

          buttonRole === 'signup' ? (
            <StyledButton type='submit' role={buttonRole}
              key={buttonRole + ' ' + i}
              onClick={setSignUpAsActive}
            >{buttonRole.toUpperCase()}</StyledButton>
          ) : (
            <StyledButton type='submit' role={buttonRole}
              key={buttonRole + ' ' + i}
            >{buttonRole.toUpperCase()}</StyledButton>

          )

        ))}

      </div>
    </StyledUserActionForm>
  );
};