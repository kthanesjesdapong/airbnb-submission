import { PropsWithChildren, ReactElement, ReactNode } from "react";
import { render, RenderResult } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { StyledThemeProvider } from "@app/providers/Style-Theme-Provider";

import { MemoryRouter } from "react-router-dom";
import { GlobalStyle } from "@shared/styles";

import { Provider } from "react-redux";
import { store } from "@shared/store";



type RenderThemeProps = {
    children: ReactElement;
    options?: Omit<RenderOptions, "queries">;
};


export const AllTheProviders = ({ children }: { children: ReactNode; }) => {

    return (
        <Provider store={store}>
            <StyledThemeProvider>
                <GlobalStyle />
                <MemoryRouter>
                    {children}
                </ MemoryRouter>
            </StyledThemeProvider>
        </Provider>
    );
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
