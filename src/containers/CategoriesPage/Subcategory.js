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
        <span className={css.count}>
          {''}({Math.random(0, 10) * 10 > 8 ? 0 : Math.floor(Math.random(0, 100) * 40)})
        </span>
      </li>
    </Link>
  ) : (
    <Link key={myId} to={subcatLink} className={css.subcategoriesLink}>
      <li key={myId} className={css.subcategorySmaller}>
        {props.name}
        <span className={css.countSmaller}>({count})</span>
      </li>
    </Link>
  );
};
