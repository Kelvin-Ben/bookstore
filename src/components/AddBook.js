import React from 'react';

export default function AddBook() {
  return (
    <div className="add-book">
      <h1>ADD NEW BOOK</h1>
      <form className="form-book">
        <input type="text" id="book-title" placeholder="Book title" />
        <input type="text" id="book-category" placeholder="Author" />
        <button type="submit" className="btn-add addbook">ADD BOOK</button>
      </form>
    </div>
  );
}
