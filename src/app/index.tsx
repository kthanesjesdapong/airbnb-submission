import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { StyledThemeProvider } from "./providers/Style-Theme-Provider";
import { RouterProvider } from "react-router-dom";
import { router } from "@shared/router";
// import App from '@app/App';

//Render Providers here
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <StyledThemeProvider>
            {/* <App /> */}
            <RouterProvider router={router} />
        </StyledThemeProvider>
    </StrictMode>
);
