import React, { useState } from "react";
import { useForm } from "react-hook-form";

/* function ToDoList() {
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
} */

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("Email", { required: true })}
          type="text"
          placeholder="Email"
        />
        <input
          {...register("FirstName", { required: true })}
          type="text"
          placeholder="First Name"
        />
        <input
          {...register("LastName", { required: true })}
          type="text"
          placeholder="Last Name"
        />
        <input
          {...register("UserName", { required: true, minLength: 10 })}
          type="text"
          placeholder="User Name"
        />
        <input
          {...register("Password", { required: true, minLength: 5 })}
          type="text"
          placeholder="Password"
        />
        <input
          {...register("PasswordConfirm", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your Password is too short.",
            },
          })}
          type="text"
          placeholder="Password Confirm"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
