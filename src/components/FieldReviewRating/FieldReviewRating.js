import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { intlShape, injectIntl } from '../../util/reactIntl';
import { Field } from 'react-final-form';
import classNames from 'classnames';
import { IconReviewStar, ValidationError } from '../../components';

import css from './FieldReviewRating.css';

class FieldReviewRatingComponent extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.input.onChange(event.target.value);
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      rootClassName,
      className,
      inputRootClass,
      customErrorText,
      id,
      intl,
      label,
      input,
      meta,
      ...rest
    } = this.props;
    /* eslint-enable no-unused-vars */

    const { touched, error } = meta;
    const errorText = customErrorText || error;
    const fieldMeta = { touched, error: errorText };

    const { value, ...restInputProps } = input;
    const inputProps = { ...restInputProps, type: 'radio', name: 'rating', ...rest };

    const classes = classNames(rootClassName || css.root, className);

    const createStarRating = starCount => {
      let inputsAndLabels = [];

      // Star inpu order: reverse order expected (5 -> 1) and also input before label
      // This is due to CSS selectors.
      // Sibling combinator (~) selects following siblings, but we want to select previous siblings
      for (let i = starCount; i > 0; i--) {
        const inputValue = `${i}`;
        const starId = `star${i}`;
        const inputId = `${id}.${starId}`;

        inputsAndLabels.push(
          <input
            key={inputId}
            id={inputId}
            className={css.rateInput}
            value={inputValue}
            checked={value === inputValue}
            {...inputProps}
          />
        );

        inputsAndLabels.push(
          <label
            key={`label.${inputId}`}
            className={css.label}
            htmlFor={inputId}
            title={intl.formatMessage({ id: `FieldReviewRating.${starId}` })}
          >
            <IconReviewStar rootClassName={css.star} />
          </label>
        );
      }
      return inputsAndLabels;
    };

    return (
      <div className={classes}>
        <fieldset
          className={css.ratingFieldSet}
          ref={c => {
            this.ratingFieldSet = c;
          }}
        >
          {label ? <legend>{label}</legend> : null}
          <div className={css.rating}>{createStarRating(5)}</div>
        </fieldset>
        <ValidationError fieldMeta={fieldMeta} />
      </div>
    );
  }
}

FieldReviewRatingComponent.defaultProps = {
  rootClassName: null,
  className: null,
  customErrorText: null,
  label: null,
};

const { string, shape, func, object } = PropTypes;

FieldReviewRatingComponent.propTypes = {
  rootClassName: string,
  className: string,
  id: string.isRequired,
  label: string,

  // Error message that can be manually passed to input field,
  // overrides default validation message
  customErrorText: string,

  // Generated by final-form's Field component
  input: shape({
    onChange: func.isRequired,
  }).isRequired,
  meta: object.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const FieldReviewRating = props => {
  return <Field component={FieldReviewRatingComponent} {...props} />;
};

export default injectIntl(FieldReviewRating);
