/* eslint-disable react/prop-types */
import React from 'react';

export default function BookFeatures(props) {
  const {
    book,
  } = props;
  return (
    <div className="book">
      <div className="book-info">
        <div className="part1">
          <span id="genre">{book.genre}</span>
          <h2 id="title">{book.title}</h2>
          <p id="author">{book.Author}</p>
          <div className="actions">
            <button type="button" className="btn type">Comments</button>
            <button type="button" className="btn type">Remove</button>
            <button type="button" className="btn type">Edit</button>
          </div>
        </div>
        <div className="part2">
          <div className="percent">
            <h3>{book.percentage}</h3>
            <span>{book.completed}</span>
          </div>
        </div>
        <div className="part3">
          <div className="progress">
            <span id="chapter">CURRENT CHAPTER</span>
            <h3 id="page">{book.chapter}</h3>
            <button type="button" className="update btn-progress">UPDATE-PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
  );
}
