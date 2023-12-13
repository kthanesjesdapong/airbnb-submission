//will use both businessList and businessDetail store here
import { createContext } from "react";
import { FormattedBusinessResponse } from ".";

export const CurrentBusinessContext = createContext<FormattedBusinessResponse | null>(null);

