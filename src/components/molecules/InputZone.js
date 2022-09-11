import { SubmitText } from "../atoms/SubmitText";
import { SubmitButton } from "../atoms/SubmitButton";
import { useState } from "react";
import styled from "styled-components";

export const InputZone = ({ submitHandleClick }) => {
  const [nowText, setNowText] = useState("");
  const handleTextInput = (text) => {
    setNowText(text);
  };

  const passSubmitToDM = () => {
    submitHandleClick(nowText);
  };
  return (
    <Wrapper>
      <SubmitText handleTextInput={handleTextInput} nowText={nowText} />
      <SubmitButton passSubmitToDM={passSubmitToDM} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: auto;
  text-align: center;
`;
