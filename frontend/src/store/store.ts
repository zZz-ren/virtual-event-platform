import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import authReducers from "./slices/authslice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authReducers,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type Appdispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<Appdispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
