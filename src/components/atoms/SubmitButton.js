import styled from "styled-components";

export const SubmitButton = () => {
    return <Btn>送信</Btn>
}

const Btn = styled.a`
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: #000;
  border: solid 1px #000;
  background-color: #D9D9D9;
  border-radius: 3px;
  transition: .4s;
  cursor: pointer;
`