import { createContext } from "react";
import { FormattedBusinessResponse } from "../";

export const CurrentBusinessContext = createContext<FormattedBusinessResponse | null>(null);

