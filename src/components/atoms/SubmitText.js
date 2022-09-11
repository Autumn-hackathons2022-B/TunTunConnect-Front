import { Input } from "@mui/material";
import styled from "styled-components";

export const SubmitText = ({ handleTextInput, nowText }) => {
  return (
    <StyledInput
      placeholder="ここにテキストを入力..."
      value={nowText}
      onChange={(event) => {
        handleTextInput(event.target.value);
      }}
    ></StyledInput>
  );
};

const StyledInput = styled(Input)`
  width: 70%;
`;
