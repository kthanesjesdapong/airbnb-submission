import { useState } from 'react';

export const useToggle = () => {
  const [status, setStatus] = useState(false);
  const toggleStatus = () => setStatus(!status);
  const toggleOff = () => setStatus(false);
  return { status, toggleStatus, toggleOff };
};
