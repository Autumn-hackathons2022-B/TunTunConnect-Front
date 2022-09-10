import styled from "styled-components";
import {LecturePage} from "./components/pages/LecturePage";

export default function App() {
  return (
        <Wrapper>
          <LecturePage />
        </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 2em;
`