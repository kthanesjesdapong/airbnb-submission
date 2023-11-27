import { ReactNode } from "react";
import { StyledThemeProvider } from "@app/providers/Style-Theme-Provider";

import { MemoryRouter } from "react-router-dom";
import { GlobalStyle } from "@shared/styles";

import { Provider } from "react-redux";
import { store } from "@shared/store";


export const AllProviders = ({ children }: { children: ReactNode; }) => {

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

