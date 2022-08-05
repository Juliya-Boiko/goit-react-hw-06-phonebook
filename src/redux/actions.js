import { createAction } from '@reduxjs/toolkit';

export const addItem = createAction('items/addItem');
export const deleteItem = createAction('items/deleteItem');
export const filterItems = createAction('filter/filterItems');
