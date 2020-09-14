import React, { Component } from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { searchListings } from '../SearchPage/SearchPage.duck';

import { Categories as eventifyCategories } from '../../categories';
import { CategoryList } from './CategoryList';
import css from './CategoriesPage.css';

export class CategoriesPageComponent extends Component {
  constructor(props) {
    super(props);
  }

  categoriesList = eventifyCategories.map(c => (
    <div key={c.id} className={css.categoryBigger}>
      <CategoryList key={c.id} id={c.id} cat={c} listings={this.props.listings}></CategoryList>
    </div>
  ));

  render() {
    console.log('CategoriesPage.props:', this.props);
    return (
      <StaticPage
        title="Visas eventify kategorijas"
        schema={{
          '@context': 'http://schema.org',
          '@type': 'CategoriesPage',
          description: 'Visas eventify kategorijas',
          name: 'Visas eventify kategorijas',
        }}
      >
        <LayoutSingleColumn>
          <LayoutWrapperTopbar>
            <TopbarContainer />
          </LayoutWrapperTopbar>

          <LayoutWrapperMain className={css.staticPageWrapper}>
            <h2 className={css.pageTitle}>
              Visas <eventify-yellow>eventify</eventify-yellow> kategorijas
            </h2>
            <div className={css.categories}>{this.categoriesList}</div>
          </LayoutWrapperMain>

          <LayoutWrapperFooter>
            <Footer />
          </LayoutWrapperFooter>
        </LayoutSingleColumn>
      </StaticPage>
    );
  }
}

CategoriesPageComponent.defaultProps = {
  listings: [],
};

const CategoriesPage = compose(withRouter)(CategoriesPageComponent);

CategoriesPage.loadData = (params, search) => {
  return searchListings({
    include: [],
    'fields.listing': ['title', 'price', 'publicData', 'premium'],
  });
};

export default CategoriesPage;
