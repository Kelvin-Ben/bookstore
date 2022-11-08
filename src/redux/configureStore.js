import { configureStore } from '@reduxjs/toolkit';
import books from './books/books';
import categories from './categories/categories';

const rootReducer = configureStore({
  reducer: {
    count: books,
    check: categories,
  },
});
export default rootReducer;
