import { PropsWithChildren, ReactElement } from "react";
import { render, RenderResult } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { StyledThemeProvider } from "@app/providers/Style-Theme-Provider";

type RenderThemeProps = {
    children: ReactElement;
    options?: Omit<RenderOptions, "queries">;
};




/*
render({children: <JSX/>})
No Need to call App because if you pass app in here it will never page twice.
*/

export const renderWithThemeProvider = ({ children, ...options }: RenderThemeProps) => {
    const Wrapper = ({ children }: PropsWithChildren) => {
        return <StyledThemeProvider>
            {children}
        </StyledThemeProvider>;
    };
    return render(children, { wrapper: Wrapper, ...options }) as RenderResult;
};
