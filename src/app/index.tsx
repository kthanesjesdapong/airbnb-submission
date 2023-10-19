import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import App from '@app/App';
import { StyledThemeProvider } from "./providers/Style-Theme-Provider";

//Render Providers here
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <StyledThemeProvider>
            <App />
        </StyledThemeProvider>
    </StrictMode>
);
