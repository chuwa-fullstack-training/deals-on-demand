import { configureStore } from '@reduxjs/toolkit';
import walmartReducer from '@/app/reducers/walmartSlice';
import amazonReducer from '@/app/reducers/amazonSlice';
import { walmartApi } from '@/services/Walmart';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    walmartReducer,
    amazonReducer,
    [walmartApi.reducerPath]: walmartApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(walmartApi.middleware)
});

setupListeners(store.dispatch);

type RootState = ReturnType<typeof store.getState>;
export type { RootState };
