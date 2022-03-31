// import Circle from "./Circle";

import React, { useState } from "react";
import styled from "styled-components";

function App() {

  const Container = styled.div`
    background-color: ${props => props.theme.bgColor}

  `;

  const H1 = styled.h1`
    color: ${props => props.theme.textColor}
  `;

  // const [value, setValue] = useState("");
  // const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
  //   const {currentTarget : {value}, } = e;
  //   setValue(value);
  // };
  
  // const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(`hello ${value}`);
  // };
  return (
    <div>
      {/* <Circle borderColor="yellow" bgColor="teal"/>
      <Circle bgColor="tomato"/>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} type="text" placeholder="username" />
        <button>Log in</button>
      </form> */}
      <Container>
      <H1>protected!</H1>
      </Container>
    </div>
  );
}

export default App;
