import {
  loginButtonRoles,
  signupButtonRole,
  loginLabelInputs,
  signUpLabelInputs,
  UserActionForm,
} from '@entities/user-action-form';
import { StyledModal } from './UserAction.styled';
import { FormEvent, useEffect } from 'react';
import {
  createUserMutation,
  SignUpInput,
  useSignUp,
  LoginInput,
  loginMutation,
  useLogin,
  getUserProfileQuery,
  useUserProfile,
} from '..';

import { useAppDispatch } from '@shared/lib/hooks';
import { login, User } from '@shared/store/userProfile';

type UserActionProps = {
  activeAction: string;
  setActive: () => void;
  setSignUpAsActive: () => void;
  isActiveString: string;
  handleActive: () => void;
};

export const UserAction = ({
  activeAction,
  setActive,
  setSignUpAsActive,
  isActiveString,
  handleActive,
}: UserActionProps) => {
  const dispatch = useAppDispatch();

  const {
    mutate: signUpMutate,
    isLoading: signUpIsLoading,
    error: signUpError,
    status: signUpStatus,
  } = useSignUp();

  const {
    mutate: loginMutate,
    isLoading: loginIsLoading,
    error: loginError,
    status: loginStatus,
  } = useLogin();

  const { data: userProfile } = useUserProfile(
    getUserProfileQuery,
    loginStatus
  );

  const handleSignUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const signUpInputs: SignUpInput = {
      email: '',
      userName: '',
      firstName: '',
      lastName: '',
      password: '',
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
      password: '',
    };

    const formData = new FormData(event.currentTarget);
    for (let [key, value] of formData.entries()) {
      const valueString = String(value);
      loginInputs[key] = valueString;
    }
    loginMutate({ loginMutation: loginMutation, userInput: loginInputs });
  };

  useEffect(() => {
    if (loginStatus === 'success' || signUpStatus === 'success') {
      dispatch(login(userProfile as User));
      handleActive();
    }
  }, [loginStatus, signUpStatus, userProfile]);

  return (
    <>
      <StyledModal $active={isActiveString} onClick={setActive} />
      {activeAction === 'Sign Up' ? (
        <UserActionForm
          callBack={handleSignUp}
          labelInputs={signUpLabelInputs}
          buttonRoles={signupButtonRole}
          isActiveStr={isActiveString}
          isLoading={signUpIsLoading}
          errors={String(signUpError)}
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
        />
      )}
    </>
  );
};
