import React from 'react';
import css from './SearchField.css';

export const SearchField = props => {
  return (
    <input
      className={css.darkTopbarSearch}
      type="search"
      placeholder={props.placeHolder}
      onChange={props.handleChange}
    />
  );
};
