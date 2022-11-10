import React from 'react';
import { useDispatch } from 'react-redux';
import { categoryCheck } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(categoryCheck())}
      type="button"
      className="Notification"
      id="check-status"
    >
      CHECK STATUS
    </button>
  );
}
