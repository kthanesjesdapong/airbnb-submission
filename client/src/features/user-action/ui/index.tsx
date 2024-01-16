

import { loginButtonRoles, signupButtonRole, loginLabelInputs, signUpLabelInputs, UserActionForm } from '@entities/user-action-form';
import { StyledModal } from "./UserAction.styled";
import { FormEvent } from "react";
import { createUserMutation, SignUpInput, useSignUp, LoginInput, loginMutation, useLogin, getUserProfileQuery, useUserProfile } from '..';
import Cookies from 'js-cookie';





type UserActionProps = {
  activeAction: string;
  setActive: () => void;
  setSignUpAsActive: () => void;
  isActiveString: string;

};

export const UserAction = ({ activeAction, setActive, setSignUpAsActive, isActiveString }: UserActionProps) => {

  const { data: signUpData, mutate: signUpMutate, isLoading: signUpIsLoading, isError: signUpIsError, error: signUpError, status: signUpStatus } = useSignUp();

  const { data: loginData, mutate: loginMutate, isLoading: loginIsLoading, isError: loginIsError, error: loginError, status: loginStatus } = useLogin();

  const { data: userProfile } = useUserProfile(getUserProfileQuery, Cookies.get('token'));



  const handleSignUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const signUpInputs: SignUpInput = {
      email: '',
      userName: '',
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
    signUpMutate({ query: createUserMutation, userInput: signUpInputs });
  };


  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginInputs: LoginInput = {
      email: '',
      password: ''
    };

    const formData = new FormData(event.currentTarget);
    for (let [key, value] of formData.entries()) {
      const valueString = String(value);
      loginInputs[key] = valueString;
    }
    loginMutate({ loginMutation: loginMutation, userInput: loginInputs });
    if (loginStatus === 'success') {
      console.log({ userProfile }, 'line 70 form features/ handleLogin');
    }
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

          isLoading={signUpIsLoading}
          errors={String(signUpError)}

          status={signUpStatus}
        />
      ) : (
        <UserActionForm
          callBack={handleLogin}
          labelInputs={loginLabelInputs}
          buttonRoles={loginButtonRoles}
          isActiveStr={isActiveString}

          setSignUpAsActive={setSignUpAsActive}
          isLoading={loginIsLoading}
          errors={String(loginError)}

          status={loginStatus}
        />

      )}
    </>
  );
};