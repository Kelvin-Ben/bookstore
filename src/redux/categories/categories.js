const CHECK = 'bookstore/categories/CHECK';

const initialStateCategories = [];

// DEFINE CHECK CATEGORY ACTION
export const categoryCheck = (category) => ({
  type: CHECK,
  category,
});

export default function Categories(state = initialStateCategories, action) {
  switch (action.type) {
    case CHECK:
      return (
        <div>Under Development</div>
        ),
    default:
      return state;
  }
}
