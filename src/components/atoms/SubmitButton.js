import styled from "styled-components";

export const SubmitButton = ({ passSubmitToDM }) => {
  return <Btn onClick={passSubmitToDM}>送信</Btn>;
};

const Btn = styled.a`
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: #000;
  border: solid 1px #000;
  background-color: #d9d9d9;
  border-radius: 3px;
  transition: 0.4s;
  cursor: pointer;
`;
