import { FormEvent } from "react";
import { StyledUserActionForm, StyledButton } from "./UserActionForm.styled";
import { UserLabelInput } from "./UserLabelInput";
import { LabelInput } from "..";


type UserActionFormProps = {
  callBack: (event: FormEvent<HTMLFormElement>) => void;
  labelInputs: LabelInput[];
  buttonRoles: string[];
  active: boolean;
  setNewActive?: () => void;
};


export const UserActionForm = ({ callBack, labelInputs, buttonRoles, active, setNewActive }: UserActionFormProps) => {


  const activeString = active === true ? 'true' : '';


  return (

    <StyledUserActionForm onSubmit={callBack} $active={activeString}>
      {labelInputs.map((labelInput, i) => (
        <UserLabelInput
          key={labelInput.inputName + i}
          labelTitle={labelInput.labelTitle}
          inputType={labelInput.inputType}
          inputName={labelInput.inputName} />
      ))}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

        {buttonRoles.map((buttonRole, i) => (

          buttonRole === 'signup' ? (
            <StyledButton type='submit' role={buttonRole}
              key={buttonRole + ' ' + i}
              onClick={setNewActive}
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