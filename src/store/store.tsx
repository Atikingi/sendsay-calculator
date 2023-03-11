import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { dndSlice } from './slices/dndSlice';
import { calculatorSlice } from './slices/calculatorSlice';

const rootReducer = combineReducers({
  dnd: dndSlice.reducer,
  calculator: calculatorSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
