import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: brown;
`;

export const LeaveButton = () => {
  //Todo: OnClick処理を追加
  return <Btn>退席</Btn>;
};
const Btn = styled.a`
  display: inline-block;
  padding: 0.3em 3em;
  text-decoration: none;
  color: #ffffff;
  border: solid 1px #000;
  background-color: #5e2424;
  border-radius: 3px;
  transition: 0.4s;
  cursor: pointer;
`;
