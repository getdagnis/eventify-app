import React, { useState } from 'react';
import css from './todos.css';

export function Todo({ todo, index }) {
  return <li className={css.darkTodo}>{todo.text}</li>;
}
