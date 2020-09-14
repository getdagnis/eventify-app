import React from 'react';
import css from './CategoriesPage.css';
import { Subcategory } from './Subcategory';

export const CategoryList = props => {
  const { cat, isSmaller } = props;
  const subcategories = cat.subcategories;
  const titleClass = isSmaller ? css.titleSmaller : css.titleBigger;
  const listClass = isSmaller ? css.listSmaller : css.listBigger;
  // console.log('categories list page listings', props.listings);

  const allListings = props.listings ? props.listings : [];
  const listingsCount = k => {
    const suchListings = allListings.filter(l => l.attributes.publicData.subcategory === k);
    return suchListings ? suchListings.length : 'listings count not known';
  };

  return (
    <React.Fragment>
      <div className={titleClass}>{cat.name}</div>
      <ul className={listClass}>
        {subcategories.map(s => (
          <Subcategory
            key={s.id}
            id={s.id}
            name={s.name}
            count={listingsCount(s.id)}
            isSmaller={isSmaller}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};
