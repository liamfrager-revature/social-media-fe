import { configureStore } from '@reduxjs/toolkit';
import postReducer from './features/post/postSlice';
import authReducer from './features/auth/authSlice'

export const store = configureStore({
    reducer: {
        post: postReducer,
        auth: authReducer
    }
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];