import { configureStore } from '@reduxjs/toolkit';
import { persisteAuthReducer } from './auth/authSlice';
import { profileApi } from './profileApi/profileApi';
import { helpApi } from './helpApi/helpApi';
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

const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: persisteAuthReducer,
    theme: themeReducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [helpApi.reducerPath]: helpApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(profileApi.middleware, helpApi.middleware),
});

export const persistor = persistStore(store);

export default store;
