import styled, { keyframes } from "styled-components";


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.backgroundColor}
`;

const Title = styled.h1`
  color: ${props => props.theme.textColor}
`;

// const animation = keyframes`
//   0% {
//     transform: rotate(0deg);
//     border-radius: 0px;
//   }
//   50% {
//     border-radius: 100px;
//   }
//   100% {
//     transform: rotate(360deg);
//     border-radius: 0px;
//   }
// `;

// const Emoji = styled.span`
//   font-size: 20px;

// `;

// const Box = styled.div`
//   width: 200px;
//   height: 200px;
//   background-color: violet;
//   animation: ${animation} 3s linear infinite;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   ${Emoji} {
//     &:hover {
//       font-size: 30px;
//     }
//   }
// `;

// const Input = styled.input.attrs({required: true, maxLength: 10 })`
//   background-color: purple;
//   color: white;
// `;

// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `;

// const Box = styled.div`
//   background-color: ${props => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;

// const Text = styled.h1`
//   color: white;

// `;

// const Circle = styled(Box)`
// border-radius: 50px;
// `

function App() {
  return (
    <Wrapper>
    {/* <Box bgColor="teal" />
    <Circle bgColor="navy" />
    <Btn>Log in</Btn>
    <Btn as="a" href="/">Log in</Btn>
    <Input />
    <Input />
    <Box>
      <Emoji>🔮</Emoji>
    </Box>*/}
    <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
