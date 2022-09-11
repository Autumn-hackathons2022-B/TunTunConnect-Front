import {Header} from "../organisms/Header";
import {Grid, Stack} from "@mui/material";
import {Inform} from "../organisms/Inform";
import styled from "styled-components";
import {Conversation} from "../organisms/Conversation";

export const DMPage = () => {
    return (
        <>
            <Header/>
            <Wrapper>
                <Grid container >
                    <Grid item xs={6} ><InformWrapper><Inform my_id={"aaa"}/></InformWrapper></Grid>
                    <Grid item xs={6}><ConversationWrapper><Conversation user_id={"aaa"} partnerId={"aaa"} /></ConversationWrapper></Grid>
                </Grid>
            </Wrapper>

        </>
    )
}

const Wrapper = styled.div`
  display: flex;
  padding-top: 48px;
  background-color: #f9f9f9;
  height: 100vh;
`

const InformWrapper = styled.div`
  border: 2px solid #000;
  padding: 20px;
  min-height: 100vh;
`

const ConversationWrapper = styled.div`
  border: 2px solid #000;
  padding: 20px;
  min-height: 100vh;

`