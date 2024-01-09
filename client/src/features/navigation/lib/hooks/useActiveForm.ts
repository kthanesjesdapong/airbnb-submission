import { useState } from 'react';

export const useActiveForm = () => {
  const [activeAction, setActiveAction] = useState('login');
  const handleActiveAction = (action: string) => {
    setActiveAction(action);
  };
  return { activeAction, handleActiveAction };
};