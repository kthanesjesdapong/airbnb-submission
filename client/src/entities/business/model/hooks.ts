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

/*
How to use:
Once you've wrapped your child component with the Provider,

to consume the useCurrentBusinessContext context within your child component

import {CurrentBusinessContext}

export const someComponent = () => {
  const {data} = useCurrentBusinessContext();
}


It's the same thing 

export const someComponent = () => {
  const {data} = useReactQuery(configs);
}


*/