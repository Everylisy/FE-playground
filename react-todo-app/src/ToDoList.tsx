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

interface IForm {}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("Email", {
            required: "Email은 필수 입력 항목입니다.",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "naver.com 주소만 허용됩니다.",
            },
          })}
          type="text"
          placeholder="Email"
        />
        <span>{errors?.Email?.message}</span>
        <input
          {...register("FirstName", {
            required: "First Name은 필수 입력 항목입니다.",
          })}
          type="text"
          placeholder="First Name"
        />
        <span>{errors?.FirstName?.message}</span>
        <input
          {...register("LastName", {
            required: "Last Name은 필수 입력 항목입니다.",
          })}
          type="text"
          placeholder="Last Name"
        />
        <span>{errors?.LastName?.message}</span>
        <input
          {...register("UserName", {
            required: "User Name은 필수 입력 항목입니다.",
            minLength: 10,
          })}
          type="text"
          placeholder="User Name"
        />
        <span>{errors?.UserName?.message}</span>
        <input
          {...register("Password", {
            required: "Password은 필수 입력 항목입니다.",
            minLength: 5,
          })}
          type="text"
          placeholder="Password"
        />
        <span>{errors?.Password?.message}</span>
        <input
          {...register("PasswordConfirm", {
            required: "Password 확인은 필수 입력 항목입니다.",
            minLength: {
              value: 5,
              message: "Your Password is too short.",
            },
          })}
          type="text"
          placeholder="Password Confirm"
        />
        <span>{errors?.PasswordConfirm?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
