import { createReducer } from '@reduxjs/toolkit';
import { addItem, deleteItem, filterItems } from './actions';

export const itemsReducer = createReducer([], {
  [addItem]: (state, action) => [...state, action.payload],
  [deleteItem]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

export const filterReducer = createReducer('', {
  [filterItems]: (state, action) => action.payload,
});
