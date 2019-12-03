import styled from "styled-components";

export const ButtonStyles = styled.div`
  background-color: black;
  color: white;
  font-size: 15px;
  width: 100px;
  height: 20px;
  display: flex;
  margin-top: 10px;
  margin-left: 10px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
