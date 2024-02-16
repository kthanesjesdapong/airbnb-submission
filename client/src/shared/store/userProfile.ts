import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type User = {
  userName: string | null;
  firstName: string | null;
  lastName: string | null;
};

const initialState: User = {
  userName: null,
  firstName: null,
  lastName: null,
};

export const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      if (action && action.payload) {
        const { userName, firstName, lastName } = action.payload!;
        state.userName = userName;
        state.firstName = firstName;
        state.lastName = lastName;
      }
    },
    logout: (state) => {
      state.userName = null;
      state.firstName = null;
      state.lastName = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
