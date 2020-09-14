import React from 'react';
import css from '../AllCategories.css';

export const Subcategory = props => {
  const myId = props.id;
  return (
    <li className={css.darkSubcategory} key={myId}>
      {props.name}
      <span className={css.darkCount}>
        ({Math.random(0, 10) * 10 > 8 ? 0 : Math.floor(Math.random(0, 100) * 40)})
      </span>
    </li>
  );
};
