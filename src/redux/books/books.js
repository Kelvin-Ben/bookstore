const CREATE = '/books/CREATE';
const REMOVE = '/books/REMOVE';

const initialState = [
  {
    id: 1,
    title: 'The Hunger Games',
    genre: 'Action',
    percentage: 64,
    author: 'Suzanne Collins',
    chapter: 17,
  },
  {
    id: 1,
    title: 'Dune',
    genre: 'Action',
    percentage: 35,
    author: 'Frank Herbert',
    chapter: 17,
  },
  {
    id: 1,
    title: 'Capital in the Twenty-First Century',
    genre: 'Action',
    percentage: 18,
    author: 'Suzanne Collins',
    chapter: 8,
  },
];

// DEFINE ACTION CREATOR FOR ADDING BOOKS
export const addBook = (payload) => ({
  type: CREATE,
  payload,
});
// DEFINE ACTION CREATOR FOR REMOVING BOOKS
export const removeBook = (id) => ({
  type: REMOVE,
  id,
});
// DEFINE REDUCERS
export default function books(state = initialState, action) {
  const index = state.findIndex((object) => object.id === action.id);
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];

    case REMOVE:
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1, state.length),
      ];
    default:
      return state;
  }
}
