import { configureStore } from '@reduxjs/toolkit';
import { persisteAuthReducer } from './auth/authSlice';
import { profileApi } from './profileApi/profileApi';
import { tasksApi } from './tasksApi/tasksApi';
import { helpApi } from './helpApi/helpApi';
import { boardsApi } from './boardApi/boardApi';
import { miniImgApi } from './miniImgApi/miniImgApi';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import themeReducer from './theme/themeSlice';
import modalReducer from './modal/modalSlice';
import { filterReducer } from './filter/filterSlice';

const store = configureStore({
  reducer: {
    auth: persisteAuthReducer,
    theme: themeReducer,
    modal: modalReducer,
    filter: filterReducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    [helpApi.reducerPath]: helpApi.reducer,
    [boardsApi.reducerPath]: boardsApi.reducer,
    [miniImgApi.reducerPath]: miniImgApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      profileApi.middleware,
      tasksApi.middleware,
      helpApi.middleware,
      boardsApi.middleware,
      miniImgApi.middleware
    ),
});

export const persistor = persistStore(store);

export default store;
