/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function BookFeatures(props) {
  const {
    book,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className="book">
      <div className="book-info">
        <div className="part1">
          <span id="genre">{book.genre}</span>
          <h2 id="title">{book.title}</h2>
          <p id="author">{book.author}</p>
          <div className="actions">
            <button type="button" className="btn type">Comments</button>
            <button
              type="button"
              className="btn type"
              onClick={() => dispatch(removeBook(book.id))}
            >
              Remove
            </button>
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
