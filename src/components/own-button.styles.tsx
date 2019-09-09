import styled from "styled-components";

export const ButtonStyles = styled.div`
  background-color: black;
  color: white;
  border: 1px solid black;
  font-size: 20px;
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
