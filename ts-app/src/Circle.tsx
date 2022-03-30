import styled from "styled-components";

interface ContainerProps {    //styled-components의 interface
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`    //interface 전달
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: ${props => props.bgColor};
    border: 1px solid ${props => props.borderColor};
`;

interface CircleProps {
    bgColor:string;
    borderColor?: string;    //Circle 컴포넌트에서 borderColor는 필수가 아니다
}

function Circle({ bgColor, borderColor }:CircleProps) {
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}/>;
}



export default Circle;