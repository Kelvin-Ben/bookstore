import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function AddBook() {
  const dispatch = useDispatch();
  const [Title, setTitle] = useState('');
  const [Author, setAuthor] = useState('');
  return (
    <div className="add-book">
      <h1>ADD NEW BOOK</h1>
      <form className="form-book">
        <input type="text" id="book-title" value={Title} onInput={(e) => setTitle(e.target.value)} placeholder="Book title" />
        <input type="text" id="book-category" value={Author} onInput={(e) => setAuthor(e.target.value)} placeholder="Author" />
        <button
          onClick={() => {
            dispatch(addBook({
              title: Title,
              author: Author,
              id: uuidv4(),
            }));
            setAuthor('');
            setTitle('');
          }}
          type="button"
          className="btn-add addbook"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
}
