import React from 'react';
import './CategoriesPage.css';
import { Subcategory } from './Subcategory';

export const CategoryList = props => {
  const category = props.cat;
  const subcategories = category.subcategories;
  console.log('categorylist props', props);

  return (
    <React.Fragment>
      <h3 className="categoryTitle">{category.name}</h3>
      <ul>
        {subcategories.map(subcategory => (
          <Subcategory id={subcategory.id} name={subcategory.name} />
        ))}
      </ul>
    </React.Fragment>
  );
};
