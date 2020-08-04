import React from "react";
import "./Button.css";

export const Button = (props) => {
  const state = {
    name: props.title,
    onChange: props.onChange,
    btnClass: props.class,
  };
  return (
    <button id="button" className={props.class} onClick={props.onChange}>
      {props.title}
    </button>
  );
};

export default Button;
