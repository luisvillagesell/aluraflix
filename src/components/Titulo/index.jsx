import styled from "styled-components";

const Titulo= styled.h2`
font-size: 32px;
color: black;
text-align: ${props => props.$align ? props.$align : "left" };
text-shadow: 
    0 0 5px rgba(0, 255, 255, 0.5), 
    0 0 15px rgba(0, 255, 255, 0.5), 
    0 0 25px rgba(0, 255, 255, 0.5), 
    0 0 45px rgba(0, 255, 255, 0.5), 
    0 0px 90px rgba(0, 255, 255, 0.5);

`
export default Titulo