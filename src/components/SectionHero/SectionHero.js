import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '../../components';

import css from './SectionHero.css';

const SectionHero = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionHero.title" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <strong>eventify</strong> ir lielākā nomas platforma pasākumu norisei. Nomā vai iznomā
          visu pasākumiem nepieciešamo — konstrukcijas, tehniku, darbaspēku — ko vien vēlies!
        </h2>
        <NamedLink
          name="SearchPage"
          to={{
            search:
              'address=Latvija&bounds=58.35458402%2C26.07687936%2C55.48984116%2C22.39122891&mapSearch=true',
          }}
          className={css.heroButton}
        >
          <FormattedMessage id="SectionHero.browseButton" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
