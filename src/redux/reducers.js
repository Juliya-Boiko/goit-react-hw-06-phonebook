import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      return [...state, action.payload];
    },
    deleteItem: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterItems: (state, action) => {
      return action.payload;
    },
  },
});

export const { addItem, deleteItem } = itemsSlice.actions;
export const { filterItems } = filterSlice.actions;

// import { createReducer } from '@reduxjs/toolkit';
// import { addItem, deleteItem, filterItems } from './actions';

// export const itemsReducer = createReducer([], {
//   [addItem]: (state, action) => [...state, action.payload],
//   [deleteItem]: (state, action) =>
//     state.filter(contact => contact.id !== action.payload),
// });

// export const filterReducer = createReducer('', {
//   [filterItems]: (state, action) => action.payload,
// });
