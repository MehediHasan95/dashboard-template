import { configureStore } from "@reduxjs/toolkit";
import api from "./api/api";
import authReducer from "./features/authSlice";
import notificationReducer from "./features/notificationSlice";
import modalReducer from "./features/modalSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    modal: modalReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV === "development" ? true : false,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
