import React from 'react';
import css from './InputText.css';

const InputText = props => {
  const className = 'input-text ' + props.class;
  return (
    <input
      className={css.darkInputText}
      type="search"
      placeholder={props.placeHolder}
      onChange={props.handleChange}
    />
  );
};

export default InputText;
