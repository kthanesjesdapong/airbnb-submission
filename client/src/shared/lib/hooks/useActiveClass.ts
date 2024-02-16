import { MouseEventHandler } from 'react';

export const useActiveClass = () => {
  let currentClassName = '';

  const setCurrentClass: MouseEventHandler<HTMLParagraphElement> = (event) => {
    const currentClass = event.currentTarget.className;
    if (currentClassName === '') {
      currentClassName = currentClass;
    }
  };
  const addActiveClass: MouseEventHandler<HTMLParagraphElement> = (event) => {
    const activeClass = `$${currentClassName} active`;
    event.currentTarget.className = activeClass;
  };

  const clearActiveClass: MouseEventHandler<HTMLParagraphElement> = (event) => {
    const listOfSiblingElements = event.currentTarget.parentElement?.children;
    for (const sibling of listOfSiblingElements!)
      sibling.className = currentClassName;
  };

  const handleActiveClass: MouseEventHandler<HTMLParagraphElement> = (
    event
  ) => {
    setCurrentClass(event);
    clearActiveClass(event);
    addActiveClass(event);
  };

  return { handleActiveClass };
};
