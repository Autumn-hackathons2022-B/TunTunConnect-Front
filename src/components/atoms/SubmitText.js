import { Input } from "@mui/material";
import styled from "styled-components";

export const SubmitText = () => {
  return <StyledInput placeholder="ここにテキストを入力..."></StyledInput>;
};

const StyledInput = styled(Input)`
  width: 70%;
`;
