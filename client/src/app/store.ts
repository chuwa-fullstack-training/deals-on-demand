import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import walmartReducer from '@/app/reducers/walmartSlice';
import amazonReducer from '@/app/reducers/amazonSlice';
// import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  walmartReducer,
  amazonReducer
});
const store = configureStore(
  {
    reducer: rootReducer
  }
  // applyMiddleware(thunk)
);

export { store };

type RootState = ReturnType<typeof store.getState>;
export type { RootState };
