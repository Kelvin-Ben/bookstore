/* eslint-disable no-unused-vars */
import { Redux } from 'react';
import books from './books/books';
import categories from './categories/categories';

const { configureStore, CombineReducers } = Redux;
const ourReducers = CombineReducers({
  count: books,
  check: categories,
});
const store = configureStore(CombineReducers);
