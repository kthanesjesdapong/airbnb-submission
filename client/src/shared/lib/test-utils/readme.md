```
import React from 'react';

describe('Reducer Test', () => {
  it('should test the reducer', () => {
    // Define an initial state (if needed)
    const initialState = { /* ... */ };

    // Render your component with the reducer and any desired props
    const { store } = renderWithProviders(
      <YourComponent />, // Replace with the component you want to test
      {
        store: configureStore({ reducer: { feature: featureReducer }, preloadedState: initialState }),
      }
    );

    // Access the Redux store for testing
    const state = store.getState();

    // Make assertions based on the state after the reducer action is applied
    // For example:
    expect(state.feature.someProperty).toEqual('expectedValue');
  });
});
```