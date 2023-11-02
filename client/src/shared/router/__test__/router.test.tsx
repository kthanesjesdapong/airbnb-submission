import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '@app/App';
import { MemoryRouter } from 'react-router-dom';
import { renderWithThemeProvider } from '@shared/lib/test-utils';
import { BrowserRouterComponent } from '../BrowserRouterComponent';
import { LocationDisplay } from '@shared/lib/hooks';

const render = renderWithThemeProvider;

test('full app rendering/navigating', async () => {
  render({ children: <App /> });
  const user = userEvent.setup();
  expect(screen.getByText(/DISCLOSE LV/i)).toBeInTheDocument();
  await user.click(screen.getByText(/about/i));
  expect(screen.getByText(/about/i)).toBeInTheDocument();

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

  // use <MemoryRouter> when you want to manually control the history
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