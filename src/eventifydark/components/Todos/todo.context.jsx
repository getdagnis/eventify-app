import React, { useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState([
    {
      text: "Pabeidzam veidot TODO sadaļu",
      isCompleted: false,
    },
    {
      text: "Ar tādu pašu mehāniku pārtaisām kategoriju sarakstu",
      isCompleted: false,
    },
    {
      text: "Atstājam TODO sarakstu pieejamu te, varbūt noderēs",
      isCompleted: false,
    },
  ]);
  return (
    <TodoContext.Provider value={todos}>{props.children}</TodoContext.Provider>
  );
};
