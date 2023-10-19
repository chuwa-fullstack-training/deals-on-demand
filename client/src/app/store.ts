import { configureStore } from '@reduxjs/toolkit';
import walmartReducer from '@/app/reducers/walmartSlice';
import amazonReducer from '@/app/reducers/amazonSlice';

const store = configureStore({
  reducer: {
    walmartReducer,
    amazonReducer
  }
});

export { store };

type RootState = ReturnType<typeof store.getState>;
export type { RootState };
