const CHECK = 'bookstore/categories/CHECK';

const initialStateCategories = [];

// DEFINE CHECK CATEGORY ACTION
export const categoryCheck = (payload) => ({
  type: CHECK,
  payload,
});

export default function Categories(state = initialStateCategories, action) {
  if (action.type === initialStateCategories) {
    return 'UNDER DEVELOPMENT';
  }
  return state;
}
