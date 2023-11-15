import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '@app/App';
import { MemoryRouter } from 'react-router-dom';
import { renderWithThemeProvider, renderWithProviders } from '@shared/lib/test-utils';
import { BrowserRouterComponent } from '../BrowserRouterComponent';
import { LocationDisplay } from '@shared/lib/hooks';

const render = renderWithThemeProvider;

test('full app rendering/navigating', async () => {
  const initialFeature = {
    selected: 'Events',
    prevSelected: 'Events'
  };
  renderWithProviders(<App />, {
    preloadedState: {
      feature: initialFeature
    }
  });

  const user = userEvent.setup();
  expect(screen.getByText(/DISCLOSE LV/i)).toBeInTheDocument();
  await user.click(screen.getAllByText(/about/i)[0]);
  expect(screen.getAllByText(/about/i)[0]).toBeInTheDocument();

});

test('landing on a bad page', () => {
  const badRoute = '/theresnopath';

  render(
    {
      children:
        <MemoryRouter initialEntries={[badRoute]}>
          <BrowserRouterComponent />
        </MemoryRouter>
    }
  );
  expect(screen.getByText(/no match/i)).toBeInTheDocument();

});


test('rendering a component that uses useLocation', () => {
  const route = '/some-route';

  render(
    {
      children: <MemoryRouter initialEntries={[route]}>
        <LocationDisplay />
      </MemoryRouter>,
    }
  );

  // verify location display is rendered
  expect(screen.getByTestId('location-display')).toHaveTextContent(route);
});