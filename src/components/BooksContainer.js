import React from 'react';
import { useSelector } from 'react-redux';
import BookFeatures from './BookFeatures';
import AddBook from './Form';

export default function BooksContainer() {
  const books = useSelector((state) => state.count);
  return (
    <>
      <div id="books-list">
        {books.map((book) => (
          <BookFeatures key={book.id} book={book} />
        ))}
      </div>
      <AddBook />
    </>
  );
}
