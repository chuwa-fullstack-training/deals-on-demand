import { combineReducers, configureStore } from '@reduxjs/toolkit';
import walmartReducer from '@/app/reducers/walmartSlice';
import amazonReducer from '@/app/reducers/amazonSlice';
import { walmartApi } from '@/services/Walmart';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  walmartReducer,
  amazonReducer,
  [walmartApi.reducerPath]: walmartApi.reducer
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(walmartApi.middleware)
});
export const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>;
export type { RootState };

setupListeners(store.dispatch);
