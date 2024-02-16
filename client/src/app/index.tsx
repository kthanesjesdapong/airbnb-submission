import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StyledThemeProvider } from './providers/Style-Theme-Provider';
import App from './App';
import { Provider } from 'react-redux';
import { store } from '@shared/store';

import { queryClient } from '@shared/api';
import { QueryClientProvider } from 'react-query';

import { ReactQueryDevtools } from 'react-query/devtools';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <StyledThemeProvider>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </StyledThemeProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
