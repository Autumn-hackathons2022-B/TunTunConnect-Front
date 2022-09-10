import styled from "styled-components";
import {LecturePage} from "./components/pages/LecturePage";
import { BrowserRouter as Router, Route } from "react-router-dom";


export default function App() {
  return (
        <Wrapper>
            <Router>
                <Route exact path="/" component={LecturePage} />
            </Router>
        </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 2em;
`