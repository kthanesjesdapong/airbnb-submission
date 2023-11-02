import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import { RootState } from '@shared/store/store';


const rootReducer = combineReducers({

});


// For Redux Testing
export const setUpStore = (preloadedState?: PreloadedState<RootState>) => configureStore({
  reducer: rootReducer,
  preloadedState
});

export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore['dispatch'];