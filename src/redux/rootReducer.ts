import { baseApi } from './api/baseApi';
import authReducer from './features/authSlice';

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
};
