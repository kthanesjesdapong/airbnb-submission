import { useState } from 'react';

export const useActiveForm = () => {
  const [currentUserAction, setAction] = useState('login');
  const setUserAction = (action: string) => {
    setAction(action);
  };
  const setSignUpAsActive = () => {
    setAction('Sign Up');
  };

  const activeString = (active: boolean): string => {
    if (active) {
      return 'true';
    } else {
      return '';
    }
  };

  return { currentUserAction, setUserAction, setSignUpAsActive, activeString };
};
