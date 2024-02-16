import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { featureReducer, type RootState } from '@shared/store';
import { StyledThemeProvider } from '@app/providers/Style-Theme-Provider';
import { GlobalStyle } from '@shared/styles';
import type { AppStore } from './setUpStore';

type ExtendedRenderOptions = Omit<RenderOptions, 'queries'> & {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
};

export const renderWithProviders = (
  children: ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { feature: featureReducer },
      preloadedState,
    }), // Provide an empty reducer here
    ...options
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({
    children,
  }: PropsWithChildren<{ children: ReactNode }>) => {
    return (
      <Provider store={store}>
        <StyledThemeProvider>
          <GlobalStyle />
          {children}
        </StyledThemeProvider>
      </Provider>
    );
  };
  return { store, ...render(children, { wrapper: Wrapper, ...options }) };
};
