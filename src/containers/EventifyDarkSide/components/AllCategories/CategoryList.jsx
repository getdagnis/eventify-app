import React from 'react';
import cssdark from '../../cssdark.css';
import { Subcategory } from './Subcategory/Subcategory.jsx';
import { Link } from 'react-router-dom';

export const CategoryList = props => {
  const catLink = '/darkside/singlecategory/' + props.id;
  const category = props.cat;
  const subcategories = category.subcategories;
  const searchValue = props.search;

  const filteredSubcategories =
    searchValue.length > 0
      ? subcategories.filter(
          category =>
            JSON.stringify(category)
              .toLowerCase()
              .includes(searchValue.toLowerCase()),
          () => console.log('filteredSubcategories', filteredSubcategories)
        )
      : subcategories;

  return (
    <Link id={props.id} to={catLink}>
      <h3 className={cssdark.darkH3}>{category.name}</h3>
      <ul>
        {filteredSubcategories.map(subcategory => (
          <Subcategory id={subcategory.id} name={subcategory.name} />
        ))}
      </ul>
    </Link>
  );
};
