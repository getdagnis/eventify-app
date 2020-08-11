import React, { useState } from "react";
import "./todos.css";

export function Todo({ todo, index }) {
  return <li className="todo">{todo.text}</li>;
}
