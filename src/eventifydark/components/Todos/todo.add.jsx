import React, { useState } from "react";
import "./todos.css";
import Button from "../Button/Button";
import InputText from "../InputText/InputText";

export const AddTodo = () => {
  const [todoTitle, setTodo] = useState("");
  const updateTodo = (e) => {
    setTodo(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
  };
  return (
    <form>
      <InputText
        name="todo"
        placeHolder="Pievieno darāmo darbu"
        class="input-last input-center"
        value={todoTitle}
        onChange={updateTodo}
      />
      <Button class="button" title="+ Pievieno darāmo darbu"></Button>
    </form>
  );
};
