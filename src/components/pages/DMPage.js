import { Header } from "../organisms/Header";
import { Grid, Stack } from "@mui/material";
import { Inform } from "../organisms/Inform";
import styled from "styled-components";
import { Conversation } from "../organisms/Conversation";
import axios from "axios";
import { useCallback, useState } from "react";
import * as Data from "../../model/Data";
import { useCookies } from "react-cookie";

export const DMPage = () => {
  const [response, setResponse] = useState();
  const [toUserCookie, setToUserCookie, removeToUserCookie] = useCookies([
    "userId",
  ]);
  const url = "https://tuntunconnect-backend.herokuapp.com/";

  const submitHandleClick = useCallback((text) => {
    //tuntunを送信
    axios
      .post(
        url +
          "api/dm/messages?from_id=" +
          Data.MY_ID +
          "&to_id=" +
          toUserCookie.userId +
          "&message=" +
          text
      )
      .then((response) => {
        setResponse(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <WholeWrapper>
      <Header />
      <Wrapper>
        <Grid container>
          <Grid item xs={6}>
            <InformWrapper>
              <Inform my_id={"aaa"} />
            </InformWrapper>
          </Grid>
          <Grid item xs={6}>
            <ConversationWrapper>
              <Conversation
                user_id={ Data.MY_ID }
                partnerId={ toUserCookie.userId }
                submitHandleClick={submitHandleClick}
              />
            </ConversationWrapper>
          </Grid>
        </Grid>
      </Wrapper>
    </WholeWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding-top: 7vh;
  background-color: #f9f9f9;
  height: 85vh;
`;
const WholeWrapper = styled.div`
  height: 80vh;
`;

const InformWrapper = styled.div`
  border: 2px solid #000;
  padding: 20px;
  min-height: 80vh;
`;

const ConversationWrapper = styled.div`
  border: 2px solid #000;
  display: block;
  padding: 20px;
  height: 80vh;
`;
