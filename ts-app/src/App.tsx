// import Circle from "./Circle";

import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
    const {currentTarget : {value}, } = e;
    setValue(value);
  };
  
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`hello ${value}`);
  };
  return (
    <div>
      {/* <Circle borderColor="yellow" bgColor="teal"/>
      <Circle bgColor="tomato"/> */}
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} type="text" placeholder="username" />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
