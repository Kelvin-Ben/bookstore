import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import BookFeatures from './BookFeatures';
import AddBook from './Form';

export default function BooksContainer() {
  const books = useSelector((state) => state.count);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <>
      <div id="books-list">
        {books.map((book) => <BookFeatures key={book.item_id} book={book} />)}
      </div>
      <AddBook />
    </>
  );
}
