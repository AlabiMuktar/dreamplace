import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authState {
    isAuthenticated: boolean,
    user: any,
    loading: boolean,
    error: any
}

const initialState: authState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      loginSuccess: (state, action:PayloadAction) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      },
      logout: (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.loading = false;
        state.error = null;
      },
    },
  });
  
  export const { loginSuccess, logout } = authSlice.actions;
  export default authSlice.reducer;