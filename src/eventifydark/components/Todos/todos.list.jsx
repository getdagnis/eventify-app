import React, { useState, useContext } from "react";
import "./todos.css";
import { Todo } from "./todo";
import { TodoContext } from "./todo.context";

export const TodosList = () => {
  const todos = useContext(TodoContext);
  const setTodos = useContext(TodoContext);
  return (
    <div className="todos">
      <div className="todo-list">
        <h3>Darāmo darbu saraksts</h3>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodosList;
