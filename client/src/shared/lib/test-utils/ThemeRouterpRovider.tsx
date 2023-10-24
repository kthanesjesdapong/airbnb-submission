import { PropsWithChildren, ReactElement } from "react";
import { render, RenderResult } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import App from "@app/App";
import { StyledThemeProvider } from "@app/providers/Style-Theme-Provider";


interface RenderThemeProps {
    children: ReactElement;
    options?: Omit<RenderOptions, "queries">;
}

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


export const renderWithProviders = ({ children, ...options }: RenderThemeProps) => {
    const Wrapper = ({ children }: PropsWithChildren) => {
        return <StyledThemeProvider>
            <App />
            {children}
        </StyledThemeProvider>;
    };
    return render(children, { wrapper: Wrapper, ...options }) as RenderResult;

};

// export renderWithProviders;