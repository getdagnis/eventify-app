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

import css from './CategoriesPage.css';
import image from './about-us-1056.jpg';

const CategoriesPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);
  const categoriesList = eventifyCategories.map(category => (
    <div className="category-block">
      <CategoryList key={category.id} id={category.id} cat={category}></CategoryList>
    </div>
  ));

  console.log('eventifyCategories', eventifyCategories);

  // prettier-ignore
  return (
    <StaticPage
      title="Visas kategorijas"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'CategoriesPage',
        description: 'Visas eventify kategorijas',
        name: 'Visas kategorijas',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h2 className={css.pageTitle}>Visas kategorijas</h2>
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
