import React, { useState } from 'react';
import BookFeatures from '../components/BookFeatures';
import AddBook from '../components/AddBook';

const book = [
  {
    id: 1,
    title: 'The Hunger Games',
    genre: 'Action',
    Author: 'Suzanne Collins',
    percentage: 64,
    chapter: 'Chapter 17',
  },
  {
    id: 2,
    title: 'Dune',
    genre: 'Science Fiction',
    Author: 'Frank Herbert',
    percentage: 8,
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    genre: 'Economy',
    Author: 'Suzanne Collins',
    percentage: 0,
    chapter: 'Introduction',
  },
];
export default function BooksContainer() {
  const [state] = useState(book);
  return (
    <>
      <div className="Book-list">
        {state.map((book) => (
          <BookFeatures key={book.id} book={book} />
        ))}
      </div>
      <AddBook />
    </>
  );
}
