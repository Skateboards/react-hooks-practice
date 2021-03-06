import React, { useState } from "react";

const Todo = props => {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  const inputChangeHandler = e => {
    setTodoName(e.target.value);
  };

  const todoAddHandler = () => {
    setTodoList([...todoList, todoName]);
  };

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={todoName}
      />
      <button type="button" onClick={todoAddHandler}>
        Add
      </button>
      <ul>
        {todoList.map(todo => {
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
    </React.Fragment>
  );
};

export default Todo;
