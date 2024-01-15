

import { loginButtonRoles, signupButtonRole, loginLabelInputs, signUpLabelInputs, UserActionForm } from '@entities/user-action-form';
import { StyledModal } from "./UserAction.styled";
import { FormEvent } from "react";
import { createUserMutation, } from '..';
import { SignUpInput, } from '..';
import { useSignUp } from '../api/useSignUp';





type UserActionProps = {
  activeAction: string;
  setActive: () => void;
  setSignUpAsActive: () => void;
  isActiveString: string;

};

export const UserAction = ({ activeAction, setActive, setSignUpAsActive, isActiveString }: UserActionProps) => {


  const { mutate, isLoading, isError, error, status } = useSignUp();



  const handleSignUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const signUpInputs: SignUpInput = {
      email: '',
      firstName: '',
      lastName: '',
      password: ''
    };
    const formData = new FormData(event.currentTarget);
    for (let [key, value] of formData.entries()) {
      const valueString = String(value);
      if (key !== 'reEnterPassword') {
        signUpInputs[key] = valueString;
      }
    }
    mutate({ query: createUserMutation, userInput: signUpInputs });
  };


  return (
    <>
      <StyledModal $active={isActiveString}
        onClick={setActive}
      />
      {activeAction === 'Sign Up' ? (
        <UserActionForm
          callBack={handleSignUp}
          labelInputs={signUpLabelInputs}
          buttonRoles={signupButtonRole}
          isActiveStr={isActiveString}



          isLoading={isLoading}
          errors={String(error)}

          status={status}
        />
      ) : (
        <UserActionForm
          callBack={handleSignUp}
          labelInputs={loginLabelInputs}
          buttonRoles={loginButtonRoles}
          isActiveStr={isActiveString}



          setSignUpAsActive={setSignUpAsActive}
          isLoading={isLoading}
          errors={String(error)}

          status={status}
        />

      )}
    </>
  );
};