import React from 'react';
import css from './CategoriesPage.css';
import { Subcategory } from './Subcategory';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchListings } from '../SearchPage/SearchPage.duck';
import * as SearchPage from '../SearchPage/SearchPage';

const CategoryListComponent = props => {
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

  console.log('categorylist props:', props.listings);
  console.log(props);

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

CategoryListComponent.defaultProps = {
  listings: [],
};

export const CategoryList = compose(
  withRouter,
  connect(SearchPage.mapStateToProps, SearchPage.mapDispatchToProps)
)(CategoryListComponent);

CategoryList.loadData = (params, search) => {
  return searchListings({
    include: [],
    'fields.listing': ['title', 'price', 'publicData', 'premium'],
  });
};

export default CategoryList;
