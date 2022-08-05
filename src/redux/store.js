import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer, filterReducer } from './reducers';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    filter: filterReducer,
  },
});
