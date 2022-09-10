import styled from "styled-components";
import {LecturePage} from "./components/pages/LecturePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {DMPage} from "./components/pages/DMPage";


export default function App() {
  return (
        <Wrapper>
            <Router>
                <Route exact path="/" component={LecturePage} />
                <Route path="/dm" component={DMPage} />
            </Router>
        </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 2em;
`