import App from "@app/App";
import { renderWithProviders } from "@shared/lib/test-utils/ThemeRouterpRovider";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { expect, jest, test } from '@jest/globals';




test('loads App', () => {
    const { findByText } = renderWithProviders({ children: <App /> });
    const textDisplay = findByText(/main/i);
    expect(textDisplay).toBeTruthy();

});
