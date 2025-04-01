import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState,UserState  } from "../../types/auth.types";


const initialState: AuthState  = {user:null,isAuthenticated:false};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;