import React, { useState } from "react";
import "./todos.css";
import { TodosList } from "./todos.list";
import { TodoProvider, TodoContext } from "./todo.context";
import { AddTodo } from "./todo.add";

export const Todos = () => {
  return (
    <TodoProvider>
      <TodosList></TodosList>
      <AddTodo></AddTodo>
    </TodoProvider>
  );
};

export default Todos();
