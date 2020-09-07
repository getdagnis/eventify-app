import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';
import { Categories as eventifyCategories } from '../../categories';
import { CategoryList } from './CategoryList';
import { searchListings } from '../SearchPage/SearchPage.duck';

import css from './CategoriesPage.css';

const CategoriesPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);
  const categoriesList = eventifyCategories.map(c => (
    <category>
      <CategoryList key={c.id} id={c.id} cat={c}></CategoryList>
    </category>
  ));

  console.log('eventifyCategories', eventifyCategories);
  console.log('searchListings', searchListings);

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
          <div className={css.categories}>{categoriesList}</div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default CategoriesPage;
