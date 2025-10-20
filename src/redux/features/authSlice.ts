import { IAdminInfo, ILoginResponse } from '@/types/common.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: IAdminInfo | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<ILoginResponse>) => {
      const { access_token, admin_info } = action.payload;
      state.token = access_token;
      state.user = admin_info;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
    updateUser: (state, action: PayloadAction<IAdminInfo>) => {
      state.user = action.payload;
    },
  },
});

export const { setCredentials, setLoading, logout, updateUser } =
  authSlice.actions;
export default authSlice.reducer;
