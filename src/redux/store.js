import { configureStore } from '@reduxjs/toolkit';
import { itemsSlice, filterSlice } from './reducers';

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    filter: filterSlice.reducer,
  },
});

// import { itemsReducer, filterReducer } from './reducers';
// export const store = configureStore({
//   reducer: {
//     items: itemsReducer,
//     filter: filterReducer,
//   },
// });
