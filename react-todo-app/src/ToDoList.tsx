import React, { useState } from "react";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          value={toDo}
          type="text"
          placeholder="Write a To Do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
