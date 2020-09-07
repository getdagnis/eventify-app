import React from 'react';
import css from './CategoriesPage.css';
import { Subcategory } from './Subcategory';

export const CategoryList = props => {
  const { cat, isSmaller } = props;
  const subcategories = cat.subcategories;
  const titleClass = isSmaller ? css.titleSmaller : css.titleBigger;
  const listClass = isSmaller ? css.listSmaller : css.listBigger;

  return (
    <React.Fragment>
      <div className={titleClass}>{cat.name}</div>
      <ul className={listClass}>
        {subcategories.map(s => (
          <Subcategory key={s.id} id={s.id} name={s.name} isSmaller={isSmaller} />
        ))}
      </ul>
    </React.Fragment>
  );
};
