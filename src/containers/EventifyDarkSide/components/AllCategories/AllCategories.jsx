import React from 'react';

import css from './AllCategories.css';
import { Button } from '../Button/Button.jsx';
import { CategoryList } from './CategoryList';

export const AllCategories = props => {
  const categories = props.categories;
  const searchValue = props.search;

  const categoriesList = categories.map(category => (
    <div className={css.darkCategory}>
      <CategoryList
        key={category.id}
        id={category.id}
        cat={category}
        search={props.search}
      ></CategoryList>
    </div>
  ));
  return categories.length < 1 && props.search.length > 0 ? (
    <div>
      Nav atrasta kategorija ar nosaukumu <span className="eventify-yellow">{props.search}</span>
    </div>
  ) : categories.length < 1 && props.search.length < 1 ? (
    <div>
      <span className="eventify-yellow">
        Iespējama fetch savienojuma kļūda. Kategorijas netika ielādētas.
      </span>
      <p>
        Categories masīva saturs: <strong>{JSON.stringify(categories)}</strong>
      </p>
      <p>
        Categories masīva tips: <strong>{typeof JSON.stringify(categories)}</strong>
      </p>
    </div>
  ) : (
    <React.Fragment>
      <div className={css.darkCategories}>{categoriesList}</div>
      <Button className={css.smallDarkBtn} title="+ Pievieno kategoriju"></Button>
    </React.Fragment>
  );
};
