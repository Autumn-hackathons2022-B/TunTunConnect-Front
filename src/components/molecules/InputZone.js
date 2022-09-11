import { SubmitText } from "../atoms/SubmitText";
import { SubmitButton } from "../atoms/SubmitButton";
import { useState } from "react";
import styled from "styled-components";

export const InputZone = () => {
  const [nowText, setNowtext] = useState("");

  return (
    <Wrapper>
      <SubmitText />
      <SubmitButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: auto;
  text-align: center;
`;
