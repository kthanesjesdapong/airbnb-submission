import { PropsWithChildren, ReactElement, ReactNode } from "react";
import { render, RenderResult } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import App from "@app/App";
import { StyledThemeProvider } from "@app/providers/Style-Theme-Provider";

import { MemoryRouter } from "react-router-dom";
import { GlobalStyle } from "@shared/styles";

import { Provider } from "react-redux";
import { store } from "@shared/store";


// interface RenderThemeProps {
//     children: ReactElement;
//     options?: Omit<RenderOptions, "queries">;
// }

type RenderThemeProps = {
    children: ReactElement;
    options?: Omit<RenderOptions, "queries">;
};

// export const renderWithProviders = ({ children,
//     ...options
// }: RenderThemeProps) => {
//     const Wrapper = ({ children }:
//         PropsWithChildren) => {
//         return <StyledThemeProvider>
//             <App />
//             {children}
//         </StyledThemeProvider>;
//     };
//     const renderResult = render(children, { wrapper: Wrapper, ...options });

//     return renderResult as ReturnType<typeof render>;

// };


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




export const renderWithProviders = ({ children, ...options }: RenderThemeProps) => {
    const Wrapper = ({ children }: PropsWithChildren) => {
        return <StyledThemeProvider>
            <App />
            {children}
        </StyledThemeProvider>;
    };
    return render(children, { wrapper: Wrapper, ...options }) as RenderResult;
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
// export renderWithProviders;