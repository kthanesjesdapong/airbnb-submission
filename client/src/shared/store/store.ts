import { configureStore, combineReducers, Reducer } from '@reduxjs/toolkit';
import featureReducer from './feature';

//Add this line Back in when feature widget is implemented
// combineReducers
//This is for testing purposes
const rootReducer: Reducer = combineReducers({
  feature: featureReducer
});

//This store is for development
export const store = configureStore({
  reducer: {
    feature: featureReducer,
  },
});

export type RootState = ReturnType<typeof rootReducer>;


