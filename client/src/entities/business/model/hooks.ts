//hook to instantiate the context

import { useContext } from "react";
import { CurrentBusinessContext } from ".";

export const useCurrentBusinessContext = () => {
  const currentBusiness = useContext(CurrentBusinessContext);
  if (!currentBusiness) {
    throw new Error('CurrentBusinessContext: No Value Provided');
  }
  return currentBusiness;
};