const CREATE = 'bookstore/books/CREATE';
const REMOVE = 'bookstore/books/REMOVE';

// DEFINE STATE
const initialState = [];

// DEFINE ACTION CREATOR FOR ADDING BOOKS
export const addBook = (name, title) => ({
  type: CREATE,
  payload: {
    name,
    title,
  },
});
// DEFINE ACTION CREATOR FOR REMOVING BOOKS
export const removeBook = (name, title) => ({
  type: REMOVE,
  payload: {
    name,
    title,
  },
});
// DEFINE REDUCERS
export default function books(listOfName = initialState, action) {
  if (action.type === 'CREATE') {
    return [...listOfName, action.payload];
  } if (action.type === 'REMOVE') {
    return listOfName.filter((name) => name !== action.payload.name);
  }
  return listOfName;
}
