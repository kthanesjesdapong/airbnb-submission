
import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';
import { GlobalStyle, theme } from '@shared/styles';



type StyledThemeProviderProps = {
    children: ReactNode;
};

export const StyledThemeProvider = ({ children }: StyledThemeProviderProps) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};