import React from 'react';
import { Link } from 'react-router-dom';
import css from './CategoriesPage.css';

export const Subcategory = props => {
  const { myId, isSmaller, count } = props;
  const subcatLink = 's?pub_subcategory=' + props.id;

  return !isSmaller ? (
    <Link key={myId} to={subcatLink} className={css.subcategoriesLink}>
      <li key={myId} className={css.subcategory}>
        {props.name}
        <span className={count > 0 ? css.countYellow : css.count}>({count})</span>
      </li>
    </Link>
  ) : (
    <Link key={myId} to={subcatLink} className={css.subcategoriesLink}>
      <li key={myId} className={css.subcategorySmaller}>
        {props.name}
        <span className={count > 0 ? css.countSmallerYellow : css.countSmaller}>({count})</span>
      </li>
    </Link>
  );
};
