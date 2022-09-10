import {TunTunIcon} from "../atoms/TunTunIcon";
import styled from "styled-components";

export const TunTunNotify = () => {
    return <Wrapper><TunTunIcon size={100}/>つんつんしました！</Wrapper>
}

const Wrapper = styled.div`
  vertical-align: center;
  horiz-align: center;
  font-size: 1.3em;
`