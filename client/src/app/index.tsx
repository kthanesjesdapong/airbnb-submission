import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { StyledThemeProvider } from "./providers/Style-Theme-Provider";
import App from "./App";

//Render Providers here
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <StyledThemeProvider>
            <App />
        </StyledThemeProvider>
    </StrictMode>
);