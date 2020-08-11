import React from "react";
import "./InputText.css";

const InputText = (props) => {
  const className = "input-text " + props.class;
  return (
    <input
      className={className}
      type="search"
      placeholder={props.placeHolder}
      onChange={props.handleChange}
    />
  );
};

export default InputText;
