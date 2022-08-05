import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

export const addItem = createAction('items/addItem');
export const deleteItem = createAction('items/deleteItem');
export const filterItems = createAction('filter/filterItems');

const itemsReducer = createReducer([], {
  [addItem]: (state, action) => [...state, action.payload],
  [deleteItem]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
  [filterItems]: (state, action) => action.payload,
});

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    filter: filterReducer,
  },
});
