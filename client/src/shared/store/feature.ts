import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type SelectedFeature = {
  selected: string;
  prevSelected: string;
};

const initialState: SelectedFeature = {
  selected: 'Events',
  prevSelected: 'Events'
};

export const featureSlice = createSlice({
  name: 'featureSelected',
  initialState,
  reducers: {
    //Payload should be a string representing the category it selected
    selectFeature: (state, action: PayloadAction<string>) => {
      //Prevents it from re-rendering when re-render is unncessary
      // if (state.selected !== action.payload) state.selected = action.payload;
      if (state.selected === action.payload) return;
      state.prevSelected = state.selected;
      state.selected = action.payload;

    }
  }
});




export const { selectFeature } = featureSlice.actions;

export default featureSlice.reducer;