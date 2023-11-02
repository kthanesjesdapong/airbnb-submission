import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { StyledThemeProvider } from "./providers/Style-Theme-Provider";
import App from "./App";
import { Provider } from 'react-redux';
import { store } from '@shared/store';
//Render Providers here
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <Provider store={store}>
            <StyledThemeProvider>
                <App />
            </StyledThemeProvider>
        </Provider>
    </StrictMode>
);