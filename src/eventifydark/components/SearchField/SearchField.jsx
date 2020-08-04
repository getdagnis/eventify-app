import React from "react";
import "./SearchField.css";

export const SearchField = (props) => {
  return (
    <input
      className={props.className}
      type="search"
      placeholder={props.placeHolder}
      onChange={props.handleChange}
    />
  );
};
